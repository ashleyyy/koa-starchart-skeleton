 // ===========================================================
//
//    Global task list item form
//
// ============================================================
// Fri Jan 8, 2016  --- replace modal with accordion

// <ul class="tasks">
// var tasklistItemHTML =
//   '<!-- tasklist goes here --> ' +
// '<li> ' +

var tasklistItemHTML =
  ' <input type="checkbox" id="chk888"> ' +
  ' <a class="taskAnchor" id="999" data-priority="1" href="">Walk the dog</a> ' +

  '<!-- the new part -- form to edit the task --> ' +
  '<div class="tasklistform"> ' +
  '  <form id="editTaskForm" action="" method="put"> ' +
  '     <label for="description">Description:</label> ' +
  '     <input type ="text" minlength="5" maxlength="50"class="" id="Edescription" name="description"></textarea> ' +
  '     <br> ' +
  '      <div class=""> ' +
  '       <label for="due_date">Due Date:</label> ' +
  '       <input type="date" id="Edue_date" name="due_date"> ' +
  '       <label for="priority">Priority:</label> ' +
  '       <select class="" id="Epriority" name="priority"> ' +
  '         <option value="1">1</option> ' +
  '         <option value="2">2</option> ' +
  '         <option value="3">3</option> ' +
  '         <option value="4">4</option> ' +
  '         <option value="5">5</option> ' +
  '       </select> ' +
  '       <label for="recurring">Recurring:</label> ' +
  '       <input type="checkbox" name="recurring" id="ERecurring"> ' +
  '      </div> ' +
  '      <br> ' +
  '       <button type="button" class="btn btn-default btn-xs" id="cancel">Cancel</button> ' +
  '       <input  type="submit" class="btn btn-primary btn-xs" id="saveEditButton"> ' +
  '       <button type="button" class="btn btn-default btn-xs" id="deleteTask">Delete Task</button> ' +
  '       <button type="button" class="btn btn-default btn-xs" id="procrastinate">Procrastinate</button> ' +
  '  </form> ' +
  '</div> ';


//'</li>';

// </ul>

var tasklistItemHTML2 =
      '<input type="checkbox" id="chk888">' +
      '<a class="taskAnchor" id="999" data-priority="1" href="">Walk the dog</a>' +
      '<!-- the new part -- form to edit the task -->' +
      '<div class="tasklistform" id=[000]>' +
      '  <form id="editTaskForm" action="" method="put">' +
      '   <table id="task-list">' +
      '     <tr>' +
      '       <td class="left-column"><label for="description">Description:</label></td>' +
      '       <td class="right-column"><input type ="text" minlength="5" maxlength="50"class="" id="Edescription" name="description"></td>' +
      '     </tr>' +
      '     <tr>' +
      '       <td class="left-column"><label for="due_date">Due Date:</label></td>' +
      '       <td class="right-column"><input type="date" id="Edue_date" name="due_date"></td>' +
      '     </tr>' +
      '     <tr>' +
      '       <td class="left-column"><label for="priority">Priority:</label></td>' +
      '       <td class="right-column" ><select class="" id="Epriority" name="priority">' +
      '             <option value="1">1</option>' +
      '             <option value="2">2</option>' +
      '             <option value="3">3</option>' +
      '             <option value="4">4</option>' +
      '             <option value="5">5</option>' +
      '           </select>' +
      '       </td>' +
      '     </tr>' +
      '     <tr>' +
      '       <td class="left-column"><label for="recurring">Recurring:</label></td>' +
      '       <td class="right-column"><input type="checkbox" name="recurring" id="ERecurring"></td>' +
      '     </tr>' +
      '   </table>' +
      '   <div class="expandedTaskButtons">' +
      '     <button type="button" class="btn btn-default btn-xs" id="cancel">Cancel</button>' +
      '     <input  type="submit" class="btn btn-primary btn-xs" id="saveEditButton">' +
      '     <button type="button" class="btn btn-default btn-xs" id="deleteTask">Delete Task</button>' +
      '     <button type="button" class="btn btn-default btn-xs" id="procrastinate">Procrastinate</button>' +
      '   </div>' +
      '  </form>' +
     '</div>';

var tasklistItemHTML3 =
          '<input type="checkbox" id="chk888">' +
          '<a class="taskAnchor" id="999" data-priority="1" href="">Walk the dog</a>' +
          '<!-- the new part -- form to edit the task -->' +
          '<div class="tasklistform">' +
          '  <form id="editTaskForm" action="" method="put">' +
          '   <table id="task-list">' +
          '     <tr>' +
          '       <td colspan="1" class="left-column"><label for="description">Description:</label></td>' +
          '       <td colspan="5" class="right-column"><input type ="text" minlength="5" maxlength="50"class="" id="Edescription" name="description"></td>' +
          '     </tr>' +
          '     <tr>' +
          '       <td class="left-column"><label for="due_date">Due Date:</label></td>' +
          '       <td class="right-column"><input type="date" id="Edue_date" name="due_date"></td>' +
          '       <td class="left-column"><label for="priority">Priority:</label></td>' +
          '       <td class="right-column" ><select class="" id="Epriority" name="priority">' +
          '             <option value="1">1</option>' +
          '             <option value="2">2</option>' +
          '             <option value="3">3</option>' +
          '             <option value="4">4</option>' +
          '             <option value="5">5</option>' +
          '           </select>' +
          '       </td>' +
          '       <td class="left-column"><label for="recurring">Recurring:</label></td>' +
          '       <td class="right-column"><input type="checkbox" name="recurring" id="ERecurring"></td>' +
          '     </tr>' +
          '  </table>' +
          '   <div class="tasklistformbuttons" id=[000]>' +
          '     <button type="button" class="btn btn-default btn-xs" id="cancel">Cancel</button>' +
          '     <input  type="submit" class="btn btn-primary btn-xs" id="saveEditButton">' +
          '     <button type="button" class="btn btn-default btn-xs" id="deleteTask">Delete Task</button>' +
          '     <button type="button" class="btn btn-default btn-xs" id="procrastinate">Procrastinate</button>' +
          '   </div>' +
          '  </form>' +
         '</div>';

// ===========================================================
//
//    Global function
//
//    getRandomInt()
//
// ============================================================
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function resetUserStars(user_id) {
  // later include jquery-confirm plugin for nicer confirm box
  var response = 
    $.confirm({
      title: "Reset Sky",
      content: "Are you sure you'd like to clear the stars from your sky?<br>This action cannot be undone.",
      columnClass: 'col-md-4 col-md-offset-4',
      confirm: function () {
        $.get('/users/' + user_id + '/tasks', function(tasks) {   
          tasks.forEach(function (task) {
            if (task.completed) {
              $.ajax({
                url: '/users/' + user_id + '/tasks/' + task.id,
                type: 'DELETE',
                success: function() {
                  console.log("stars deleted");
                }
              });
            }  
          });
        });
        $.alert({
          title: "Success",
          content: "Stars have been removed.",
          confirm: function(){
            window.location.href = "/"; 
          }
        });        
      }
      // window.location.href = "/"; 
    });

  if (response === true) {
    $.get('/users/' + user_id + '/tasks', function(tasks) {   
      tasks.forEach(function (task) {
        if (task.completed) {
          $.ajax({
            url: '/users/' + user_id + '/tasks/' + task.id,
            type: 'DELETE',
            success: function() {
              console.log("stars deleted");
            }
          });
        }  
      });
      // $.alert({
      //   title: 'Stars have been removed.',
      //   content: 'Simple alert!',
      // });
      
      window.location.href = "/";  
    });   
  }
}


function dailyTaskRefresh(userId) {
  return new Promise(function(resolve, reject){
    var request = [];
    console.log("inside dailyTaskRefresh");

    var today = new Date();
    today.setHours(0,0,0,0);
    console.log("today: "+today);

    return new Promise(function(resolve, reject){
      $.get('users/' + userId + '/old/tasks', function(tasks){

      var oldTasks = tasks;
      var myTask;

      for (var i = 0; i < oldTasks.length; i++) {
 
      var task = oldTasks[i];
 
        if (task.recurring === true || task.postponed === true) {
          //create duplicate task with today as due date
          myTask = {description: task.description,
           due_date: today,
           priority: task.priority,
           recurring: task.recurring,
           postponed: false,
           completed: false,
           UserId: userId};

          var createTask = $.post('/users/' + userId + '/tasks', myTask, function(task) {
            console.log("Create of task "+task.id+" successful.");
            console.log("task = ", task);
          });
          request.push(createTask);
        }

        if (task.completed === false) {
          //delete incomplete tasks
          var deleteTask = $.ajax({
            url: '/users/' + userId + '/tasks/' + task.id,
            type: 'DELETE',
            success: function() {
              console.log("done with delete task "+task.id);
            }
          });
          request.push(deleteTask);

        } else {
          //change recurring to false.
          myTask = {id: task.id,
           description: task.description,
           due_date: task.due_date,
           priority: task.priority,
           recurring: false,
           postponed: false,
           completed: task.completed,
           UserId: userId};

          modTask = $.ajax({
            type: "PUT",
            url:  'users/' + userId + '/tasks/' + task.id,
            contentType: "application/json",
            data: JSON.stringify(myTask),
            success: function(data) {
              console.log("removed recurring flag from yesterday's completed task "+task.id);
            },
            error: function (xhr, ajaxOptions, thrownError) {
              alert(xhr.responseText);
            }
          });
          request.push(modTask);
        }
      } // end of loop

      Promise.all(request).then(function(){
        console.log('finished refresh');
        resolve();
      });
    }); // end of get
 resolve();
  });
});
}

// ===========================================================
//
//    Global function
//
//    changeHeaderTask()
//
// ============================================================
function changeHeaderTask() {

  var oneOrMoreIncompleteTasks = false;

  // if one or more tasks are not completed change task in header
  allTasks.forEach(function(task) {
    if (!task.completed) {
      oneOrMoreIncompleteTasks = true;
    }
  });

  if (oneOrMoreIncompleteTasks) {

    var foundRandomIncompleteTask = false;
    var min = 0;
    var max = allTasks.length;
    var randomIndex;

    do {
      randomIndex = getRandomInt(min, max);
      if (!allTasks[randomIndex].completed) {
        foundRandomIncompleteTask = true;
      }
    } while (!foundRandomIncompleteTask);

    var task2 = allTasks[randomIndex];

    // <span id='header-task' data-header-task-id='header_task'>
    $('#header-task').text(task2.description).attr('data-header-task-id', task2.id );

  }

}
// ===========================================================

  // is this the updated timestamp?

// ===========================================================


Date.prototype.toDateInputValue = (function () {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0,10);
});

// ===========================================================
//
//    Global function
//
//    reloadTasks() is called in _taskcreatemodal.ejs when Submit button clicked
//    reloadTasks() is called in user.html.ejs when delete checkbox is clicked
//
// ============================================================

var allTasks; // This needs to remain in the global scope, please do not move!

function reloadTasks(userId, changeTaskInHeader) {

  console.log('start of reload');

  // default changeTaskInHeader to false
  changeTaskInHeader = typeof changeTaskInHeader !== 'undefined' ?  changeTaskInHeader : false;

  $(".tasks").empty();

  $.get('users/' + userId + '/tasks', function(tasks){

    allTasks = tasks;

    // =========================================================
    //  if parameter "change_task_in_header" == true
    //  ... then change the task in the header
    // =========================================================

    if (changeTaskInHeader) {
      changeHeaderTask();
    }

    // =========================================================


    var $taskUl = $('ul.tasks');
    var $taskLi;
    var $checkBox;
    var $taskAnchor;

    // iterate thru returned array and load <li>s
    allTasks.forEach(function(task) {
      $taskLi = $('<li>');

      if (!task.completed) {

        var modifyTaskForm = tasklistItemHTML3.replace("id=[000]", "id=D" + task.id);

        $taskLi.html(modifyTaskForm);

        $taskUl.append($taskLi);

        //  in tasklistItemHTML replace  id="999"  with actual task.id
        $taskLi.find('#999').attr('id', task.id);

        //  in tasklistItemHTML replace id="chk&&&" with actual task.id

        //  update checkbox value
        //    id="chk888"
        $taskLi.find('#chk888').attr('id', 'chk' + task.id).prop('checked', task.completed);

        //  update these field values in form
        //    id="Edescription"
        //    id="Edue_date"
        //    id="Epriority"
        //    id="ERecurring"
        $taskLi.find("#Edescription").val(task.description);
        $taskLi.find("#Edue_date").val(new Date(task.due_date).toDateInputValue());
        $taskLi.find("#Epriority").val(task.priority);
        $taskLi.find("#ERecurring").prop('checked', task.recurring);

        //  update the task description on the anchor tag
        //  update 'data-priority' value on anchor tag
        //       'data-priority': task.priority
        $taskLi.find(".taskAnchor").text(task.description)
                                   .attr({
                                          'id':   task.id.toString(),
                                          'data-priority': task.priority,
                                        });
        
        // .addClass("incomplete") needed to isolate incomplete tasks for sorting
        $taskLi.find(".taskAnchor").addClass("incomplete");                           

        //for color change upon clicking procrastinate button:
        var procrastinateButtonSelector = "#D" + task.id + " " + "button#procrastinate";
        // console.log(procrastinateButtonSelector);
        if (task.postponed === true){
          $taskLi.find(".taskAnchor").addClass("postponed");
          $taskLi.find(".taskAnchor").removeClass("incomplete");
          $(procrastinateButtonSelector).html('Undo Procrastinate');
        } else {
          $taskLi.find(".taskAnchor").removeClass("postponed");
          $(procrastinateButtonSelector).html('Procrastinate');
        }

        $checkBox = $taskLi.find("#chk" + task.id);

        // ===========================================================
        //
        //   Use checklist to mark task as complete and create star
        //
        // ============================================================

        $checkBox.change(function () {
          var userId = $('div#userId').attr('data-id');
          var taskId = ($(this).attr("id")).substring(3);
          var task = findByTaskId(taskId);
          task.completed = true;

          // AJAX call to  POST data to server
          $.ajax({
              type: "PUT",
              url:  'users/' + userId + '/tasks/' + task.id,
              contentType: "application/json",
              data: JSON.stringify(task),
              success: function(data) {
                        // if task just completed was the header task
                        // ... then need to change header task.
                        // ...  &&&
                        var headerTaskId = $('#header-task').attr('data-header-task-id');
                        if (task.id === parseInt(headerTaskId, 10)) {
                          changeHeaderTask();
                        }

                      },
              failure: function ( jqXHR, textStatus, errorThrown ) {
                       alert(jqXHR.responseText);
              }
          });

          var star = {};
          star.TaskId = taskId;

          star.UserId = userId;

          star.x_cord = getRandomInt(0, 98);
          star.y_cord = getRandomInt(2, 92);

          $(".new-hover-control").addClass("hover-control");
          $(".new-hover-control.hover-control").removeClass("new-hover-control");

          var newHoverControl = $("<div>").addClass("new-hover-control");
          var newStarContainerDiv = $("<div>").addClass("new-star-container");
          var addOuterDiv = $("#basebox").append(newHoverControl);
          var addDiv = newHoverControl.append(newStarContainerDiv);
          var newStarDiv = $("<div>").addClass("new-star");
          var addStar = newStarContainerDiv.append(newStarDiv);
          var newTextDiv = $("<div>").addClass("hidden-task-info").text('      ' + task.description);
          var addText = newHoverControl.append(newTextDiv);

          (function(){
            setTimeout(function(){
              $(".new-hover-control").css({"left": star.x_cord + "%", "top": star.y_cord + "%"});
            }, 10);
          })();

          setTimeout(function(){
            // logic to determine whether changeHeaderTaskFlag = true or not
            var headerTaskId = $('#header-task').attr('data-header-task-id');

            var changeHeaderTaskFlag = false;
            if (taskId === headerTaskId) {
              changeHeaderTaskFlag = true;
            }

            reloadTasks(userId, changeHeaderTaskFlag);
          },70);


          // AJAX call to  POST star to server
          $.ajax({
            type: "POST",
            url:  'users/' + userId + '/tasks/' + star.TaskId + '/stars',
            contentType: "application/json",
            data: JSON.stringify(star),
            success:function(data) {
                    console.log('Star was inserted successfully');
                    },
            failure:function ( jqXHR, textStatus, errorThrown ) {
                    console.log(jqXHR.responseText);
                    alert(jqXHR.responseText);
                    }
          });

        });      // end of   $checkBox.change(function () {

 // ============================================================

      } else {

          $taskLi = $('<li>');

          $taskAnchor = $('<span class="taskAnchor">').text(task.description)
                                   .attr({
                                          'id':   task.id.toString(),
                                          'priority': task.priority,
                                        });

          $taskAnchor.addClass("complete_span_disabled");

          $checkBox = $('<input type="checkbox" class="complete complete_checkbox_disabled" disabled>').attr({
            'id':   task.id.toString()
            }).prop('checked', task.completed);

          $taskLi.append($taskAnchor, $checkBox);

          $taskUl.append($taskLi);

      }
    });
  });
}

// end of reload???

// ===========================================================
//
//
//   Function to find task by id
//
// ============================================================

function findByTaskId(task_id) {
  return $.grep(allTasks, function( n ) {
    return n.id === parseInt(task_id, 10);
  })[0];
}



$(function() {

  // ===========================================================
  function saveUpdatedTaskToDatabase($target) {

      var $tasklistForm = $target.closest('li').find('.tasklistform');

      var taskId = $target.closest('li').find(".taskAnchor").attr('id');

      var task = findByTaskId(taskId);    // does this include "postponed" ?
      task.description = $tasklistForm.find("#Edescription").val();
      task.due_date    = $tasklistForm.find("#Edue_date").val();
      task.due_date = task.due_date+" 00:00:00.000 -08:00";
      task.priority    = $tasklistForm.find("#Epriority").val();
      task.recurring   = $tasklistForm.find("#ERecurring").is(":checked");
      task.updatedAt   = Date.now();

      if ($target.attr('id') === 'procrastinate') {
        task.postponed = !task.postponed;
      }

      var userId = $('div#userId').data('id');

      // AJAX call to PUT task data to server
      $.ajax({
          type: "PUT",
          url:  'users/' + userId + '/tasks/' + task.id,
          contentType: "application/json",
          data: JSON.stringify(task),
          success: function(data) {
                    console.log("#saveEditButton or procrastinate click ajax PUT was suceessful.");
                    console.log("data returned ", data);

                    reloadTasks(userId);

                  },
          error: function (xhr, ajaxOptions, thrownError) {

                    console.log("#saveEditButton  or procrastinate click ajax PUT failed.");
                    console.log("status = " + xhr.status);
                    console.log("xhr.responseText = " + xhr.responseText);
                    alert(xhr.responseText);
                  }
      });
  }



  // ===========================================================

  function deleteTaskFromDatabase($target) {

    var $tasklistForm = $target.closest('li').find('.tasklistform');

    var taskId = $target.closest('li').find(".taskAnchor").attr('id');

    var userId = $('div#userId').data('id');


    //  delete Task in the server
    //  ... also deletes the stars associated with the task

    $.ajax({
      url: '/users/' + userId + '/tasks/' + taskId,
      type: 'DELETE',
      success: function() {
        // if this task was the header task
        // ... then need to select another header task
        var headerTaskId = $('#header-task').attr('data-header-task-id');

        var changeHeaderTaskFlag = false;
        if (taskId === headerTaskId) {
          changeHeaderTaskFlag = true;
        }
        reloadTasks(userId, changeHeaderTaskFlag);
      },
      error: function (xhr, ajaxOptions, thrownError) {
          console.log("#deleteTask button click ajax DELETE failed.");
          console.log("status = " + xhr.status);
          console.log("xhr.responseText = " + xhr.responseText);
      }
    });
 }
  // ===========================================================

 // THIS IS WHERE EVERYTHING STARTS HAPPENING //

  console.log("in applications.js file");
  console.log(window.location.pathname);

  var str = window.location.pathname;

  var usersPage = str.match(/^\/user$/);        //   "/user"

  var homePage = str.match(/^\/$/);             //   "/"

  if (usersPage || homePage) {


        // ===========================================================
        //
        //
        //   Load user's task list when page opens
        //
        // ============================================================

        var userId = $('div#userId').data('id');
        
        var changeTaskInHeaderFlag = true;

        dailyTaskRefresh(userId).then(reloadTasks.call(null, userId, changeTaskInHeaderFlag));

        // ===========================================================
        //
        //
        //   Trap create Task button click ( cross icon)
        //   ... and default due date to current date
        //
        // ============================================================
        $('#createTaskButton').on('click', function(event) {
          // populate the date field in the _taskcreatemodal.ejs template
          
          // keep $("#createTaskForm").show(); below so that form shows when
          // creating new task (it gets hidden when a task with a future due 
          // date is created)
          $('#createTaskForm').trigger("reset");
          $("#createTaskForm").show();

          var objToday = new Date();

          var curYear = objToday.getFullYear();
          var curDay  = objToday.getDate();
          var curMonth = objToday.getMonth() + 1;

          if (curMonth < 10) { curMonth = "0" + curMonth;}

          if (curDay < 10) { curDay = "0" + curDay;}

          var finalDate = curYear + "-" + curMonth + "-" + curDay;

          $("#due_date").val(finalDate);
        });

        // ===========================================================
        //
        //
        //   Trap task list item click and open modal Bootstrap "task detail" window
        //
        // ============================================================
        // Attach a delegated event handler
        $('ul.tasks').on('click', 'a', function(event) {
          event.preventDefault();
          $(this).closest('li').find('.tasklistform').toggle();
        });

        // ===========================================================
        //
        //
        //   Trap task list item form "Cancel" button click
        //   ... and hide task list item form
        //
        // ============================================================
        // Attach a delegated event handler

        $('ul.tasks').on('click', 'button', function(event) {
          event.preventDefault();

          // if "Cancel" button clicked, hide task list item form
          if ($(this).attr('id') === "cancel") {
            // display .tasklistform for clicked task link
            $(this).closest('li').find('.tasklistform').css('display', 'none');
          }

          // if "Procrastnate" button clicked, hide task list item form
          if ($(this).attr('id') === "procrastinate") {

            // save data to database here
            saveUpdatedTaskToDatabase($(this));

            // display .tasklistform for clicked task link
            $(this).closest('li').find('.tasklistform').css('display', 'none');
          }

          // if "Delete" button clicked, hide task list item form
          if ($(this).attr('id') === "deleteTask") {

            // delete data from database here
            deleteTaskFromDatabase($(this));

            // display .tasklistform for clicked task link
            $(this).closest('li').find('.tasklistform').css('display', 'none');
          }

        });

        // ===========================================================
        //
        //
        //   Trap task list item form "Submit" button click
        //   ... and hide task list item form
        //
        // ============================================================

        // $("#editTaskForm").submit(function(){
        $('ul.tasks').on('submit', function(event) {

          event.preventDefault();

          // $(this) is the <ul>
          var editTaskForm = event.target;

          //  save data to database here
          saveUpdatedTaskToDatabase($(editTaskForm));

          // display .tasklistform for clicked task link
          $(editTaskForm).css('display', 'none');

        });

        // ===========================================================
        //
        //
        //   Sort tasks by priority using sortByPriority button
        //
        // ============================================================

        $("#sortByPriority").on('click', function() {
          tinysort('ul.tasks>li', {selector: '.taskAnchor.incomplete', data: 'priority', order: 'asc'});
          tinysort('ul.tasks>li', {selector: '.taskAnchor.postponed', data: 'priority', order: 'asc'});
          tinysort('ul.tasks>li', {selector: '.taskAnchor.complete_span_disabled', attr: 'priority', order: 'asc'});
        }); 

   } // end of user's Page  !!!

  var settingsPage = str.match(/^\/settings$/);   

    if (settingsPage) {
      var uId = $('div#userId').attr('data-id');
      $("#resetStars").on("click", resetUserStars.bind(this, uId));
    }

});

