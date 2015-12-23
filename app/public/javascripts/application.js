$(function() {

  var userId = 2;

  console.log("in applications.js file");
  console.log(window.location.path);

  var _tasks;

  var str = window.location.pathname;

  var usersPage = str.match(/^\/view$/);

  var homePage = str.match(/^\/$/);


  if (usersPage || homePage) {

      $(document).ajaxError(function(e)
      {
        console.error('Ajax Request Failed: ', e);
      });

        // ===========================================================
        //
        //
        //   Load user's task list when page opens
        //
        // ============================================================
        var server = 'localhost:3000';

        // var userId = $('.something_to_get_userid').text();

        // load user tasks
        reloadTasks();

  // ===========================================================
  //
  //
  //   Function to reload task list after creating new 
  //   task and deleting a task 
  //
  // ============================================================  

  function reloadTasks() {
    $(".tasks").empty();

    $.get('users/' + userId + '/tasks', function(tasks){

      _tasks = tasks;

      // find the <ul>
      var $taskUl = $('ul.tasks');

      var $taskLi;

      // iterate thru returned array and load <li>s
      tasks.forEach(function(task) {

         $taskLi = $('<li>');

         // <a href data-toggle="modal" data-target="#myModal">Do laundry</a>

         $taskAnchor = $('<a>').text(task.description)
                               .attr({
                                      'id':   task.id.toString(),
                                      'href': '',
                                      'data-toggle': "modal",
                                      'data-target': "#myModal"
                                    });

         $taskLi.append($taskAnchor);

         $taskUl.append($taskLi);
      });

    });
  }; 

  // ===========================================================
  //
  //
  //   Function to find task by id
  //
  // ============================================================

  function findByTaskId(task_id) {
    return $.grep(_tasks, function( n ) {
      return n.id === parseInt(task_id);
    })[0]; 
  };

  // ===========================================================
  //
  //
  //   Submit create new task form
  //
  // ============================================================

  $("#createTaskForm").on('submit', function(e) { 
    e.preventDefault();

    var taskDescription = $("#description").val();
    var dueDate = $("#due_date").val();
    var taskPriority = $("#priority").val();
    var recurringCheckbox = $("#recurring").is(":checked");

    var myTask = {description: taskDescription, due_date: dueDate, priority: taskPriority, recurring: recurringCheckbox, postponed: false, completed: false};

    $.post('/users/' + userId + '/tasks', myTask, function(task) { 
    $('#createTaskForm').trigger("reset"); 
    $("#addTaskModal").modal('hide');  
    reloadTasks();
    
    });
  });

  // ===========================================================
  //
  //
  //   Retrieve Specific Task for Edit task modal
  //
  // ============================================================  
  // 

  // function prepopulateEditForm(task) {

  //   $("#Edescription").val(task.description);
  //   $("#Edue_date").val(task.due_date);
  //   $("#Epriority").val(task.priority);
  //   $("#Erecurring").val(task.recurring);
  // }

  $('#editTask').on('click', function() {
    var taskId = $('div.details').attr("id");
    console.log("inside prepopulation edit form");
    console.log(taskId);
    // var currentTask = findByTaskId(parseInt(taskId));
    $(".taskId").attr({
                      'id':   taskId
                      });
  });

  // ===========================================================
  //
  //
  //   Update Task when Submit Task is clicked
  //
  // ============================================================

  $("#saveEditButton").on('click', function() {
    var task = {};
    task.id = $(".taskId").attr("id");
    task.description = $("#Edescription").val();
    task.due_date = $("#Edue_date").val();
    task.priority = $("#Epriority").val();
    task.recurring = $("#Erecurring").val(); 
        // AJAX call to  POST data to server
        $.ajax({
            type: "PUT",
            url:  'users/' + userId + '/tasks/' + task.id,
            contentType: "application/json",
            data: JSON.stringify(task),
            success: function(data) {
                      alert('Update was successful.');
                    },
            failure: function(err) {
                      alert(err);
                    }
        }); 
  });      

  // ===========================================================
  //
  //
  //   Delete task on click
  //
  // ============================================================

  $("#deleteTask").on('click', function() {
    var taskId = $('div.details').attr("id");
    console.log("trying to delete a task");
    console.log(taskId);
    $(".taskId").attr({
                      'id':   taskId
                      }); 
    $.ajax({
      url: '/users/' + userId + '/tasks/' + taskId,
      type: 'DELETE',
      success: function() {
        reloadTasks();
        console.log("done with delete");
      }
    });
    //trying to reload tasks after delete is clicked
    $("#myModal").modal('hide');  
  });

  // ===========================================================
  //
  //
  //   Set procrastinate flag to true if it is selected
  //
  // ============================================================

    $("#procrastinate").on("click", function() {

      var taskId = $('div.details').attr("id");
      console.log(taskId);
      var task = findByTaskId(taskId);
      console.log(task);
      task.postponed = true;
      
      $.ajax({
            type: "PUT",
            url:  'users/' + userId + '/tasks/' + taskId,
            contentType: "application/json",
            data: JSON.stringify(task),
            success: function(data) {
                      reloadTasks();
                    },
            failure: function(err) {
                      alert(err);
                    }
        }); 
      $("#myModal").modal('hide');  

    });


        // ===========================================================
        //
        //
        //   Trap task list item click and open modal Bootstrap window
        //
        // ============================================================
        // Attach a delegated event handler
        $('ul.tasks').on('click', 'a', function(event) {

          // load user's task data into modal

          event.preventDefault();
          var thisTask = findByTaskId(this.id);
          console.log(thisTask);
          console.log(thisTask.due_date);
          var desc = thisTask.description.toString;
          $('.taskDetails').html(
            "Task: " + thisTask.description + "<br/>" + 
            "Due date: " + thisTask.due_date.substring(0,10)  + "<br/>" +
            "Recurring: " + (thisTask.recurring ? "Yes" : "No")  + "<br/>" +
            "Completed: " + (thisTask.completed ? "Yes" : "No")  + "<br/>" +
            "Postponed: " + (thisTask.postponed ? "Yes" : "No")  + "<br/>" +
            "Priority: " + thisTask.priority  + "<br/>"
            );
          $('div.details').attr({
            'id': $(this).attr("id")
          });  

        });


        // ===========================================================
        //
        //
        //   Trap button clicks at bottom of  modal Bootstrap window
        //
        // ============================================================

        // <div class="taskDetailButtons">
        // <button type="button" class="btn btn-default" id="editTask">Edit Task</button>
        // <button type="button" class="btn btn-default" id="deleteTask">Delete Task</button>
        // <button type="button" class="btn btn-default" id="procrastinate">Procrastinate</button>
        // <button type="button" class="btn btn-default" id="taskComplete">Mark as complete</button>
        // </div>

        $('div.taskDetailButtons').on('click', 'button', function(event) {

           var task = {};
           var star = {};

           event.preventDefault();

           // ---------------------------------------------------------------
           //
           //   trap and process Save of Task
           //
           // ---------------------------------------------------------------
           if ($(this).attr("id") === "saveTask") {

              // task.description = $('div.details').text();
              task.description = 'supercalifragalisticexpeaalidoshus';
              task.id = $('div.details').attr("id");

              // AJAX call to  POST data to server
              $.ajax({
                  type: "PUT",
                  url:  'users/' + userId + '/tasks/' + task.id,
                  contentType: "application/json",
                  data: JSON.stringify(task),
                  success: function(data) {
                            alert('Update was successful.');
                          },
                  failure: function(err) {
                            alert(err);
                          }
              });

           }

           // ---------------------------------------------------------------
           //
           //   trap and process Completed Task button click
           //
           // ---------------------------------------------------------------
           if ($(this).attr("id") === "taskComplete") {

              // star.TaskId = $('div.details').attr("id");

              // star.x_cord = 81;
              // star.y_cord = 131;


              // // AJAX call to  POST star to server
              // $.ajax({
              //     type: "POST",
              //     url:  'users/' + userId + '/tasks/' + star.TaskId + '/stars',
              //     contentType: "application/json",
              //     data: JSON.stringify(star),
              //     success: function(data) {
              //               alert('Star create was successful.');
              //             },
              //     failure: function(err) {
              //               alert(err);
              //             }
              // });

              task.id = $('div.details').attr("id");
              task.completed = true;

              // AJAX call to  POST data to server
              $.ajax({
                  type: "PUT",
                  url:  'users/' + userId + '/tasks/' + task.id,
                  contentType: "application/json",
                  data: JSON.stringify(task),
                  success: function(data) {
                            alert('Update was successful.');
                          },
                  failure: function(err) {
                            alert(err);
                          }
              });


           }

        });

   } // end of user's Page  !!!

});

