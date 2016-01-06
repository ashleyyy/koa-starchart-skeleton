// ===========================================================
//
//    Global function
//
//    reloadTasks() is called in _taskcreatemodal.ejs when Submit button clicked
//    reloadTasks() is called in user.html.ejs when delete checkbox is clicked
//
// ============================================================

var allTasks; // This needs to remain in the global scope, please do not move!

function reloadTasks(userId) {

  $(".tasks").empty();

  $.get('users/' + userId + '/tasks', function(tasks){

    allTasks = tasks;
    // find the <ul>
    var $taskUl = $('ul.tasks');

    var $taskLi;

    var $checkBox;

    var $taskAnchor;

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    // ===========================================================
    //  get random task to display in header
    //
    // ===========================================================

    var max = allTasks.length;
    var min = 0;

    var random_index = getRandomInt(min, max);

    var temp = allTasks[random_index].description;

    $('#header-task').text(allTasks[random_index].description);

    // iterate thru returned array and load <li>s
    allTasks.forEach(function(task) {

      $taskLi = $('<li>');

     // <a href data-toggle="modal" data-target="#myModal">Do laundry</a>

      if (!task.completed) {
        $taskAnchor = $('<a>').text(task.description)
                                 .attr({
                                        'id':   task.id.toString(),
                                        'href': '',
                                        'data-toggle': "modal",
                                        'data-target': "#myModal"
                                      });

        $checkBox = $('<input type="checkbox" class="complete">').attr({
          'id':   task.id.toString()
          }).prop('checked', task.completed);

        // ===========================================================
        //
        //
        //   Use checklist to mark task as complete and create star
        //
        // ============================================================

        $checkBox.change(function () {
        console.log("LOOK HERE.");
        var userId = $('div#userId').attr('data-id');
        console.log(userId);
        var taskId = $(this).attr("id");
        var task = findByTaskId(taskId);
        task.completed = true;

        // AJAX call to  POST data to server

        $.ajax({
            type: "PUT",
            url:  'users/' + userId + '/tasks/' + task.id,
            contentType: "application/json",
            data: JSON.stringify(task),
            success: function(data) {
                      console.log('Task was updated successfully');
                      console.log(data);
                      alert('Task was updated successfully.');
                    },
            failure: function ( jqXHR, textStatus, errorThrown ) {
                     console.log(jqXHR.responseText);
                     alert(jqXHR.responseText);
            }
        });


        var star = {};
        star.TaskId = taskId;

        star.UserId = userId;   /// &&&

        star.x_cord = getRandomInt(1, 100);;
        star.y_cord = getRandomInt(1, 100);;


        // AJAX call to  POST star to server
        $.ajax({
            type: "POST",
            url:  'users/' + userId + '/tasks/' + star.TaskId + '/stars',
            contentType: "application/json",
            data: JSON.stringify(star),
            success: function(data) {
                      console.log('Star was inserted successfully');
                      console.log(data);
                      alert('Task was inserted successfully.');
                      location.reload();
                    },
            failure: function ( jqXHR, textStatus, errorThrown ) {
                     console.log(jqXHR.responseText);
                     alert(jqXHR.responseText);
                   }
         });
        });

        } else {
        $taskAnchor = $('<span class="taskAnchor">').text(task.description)
                                 .attr({
                                        'id':   task.id.toString(),
                                      //  'data-toggle': "modal",
                                      //  'data-target': "#myModal",
                                      //  'disabled': "disabled"
                                      });

        $taskAnchor.addClass("complete_span_disabled");

        $checkBox = $('<input type="checkbox" class="complete complete_checkbox_disabled" disabled>').attr({
          'id':   task.id.toString()
          }).prop('checked', task.completed);


      }


      //for color change upon clicking procrastinate button:
      if (task.postponed){
        $taskAnchor.addClass("postponed");
      }


      // $("#complete").prop('checked', task.completed);



      $taskLi.append($taskAnchor, $checkBox);

      $taskUl.append($taskLi);



    });

  });
}

  // ===========================================================
  //
  //
  //   Function to find task by id
  //
  // ============================================================

  function findByTaskId(task_id) {
    return $.grep(allTasks, function( n ) {
      return n.id === parseInt(task_id);
    })[0];
  };



$(function() {

  console.log("in applications.js file");
  console.log(window.location.pathname);

  var str = window.location.pathname;

  var usersPage = str.match(/^\/view$/);

  var homePage = str.match(/^\/$/);


  if (usersPage || homePage) {


        // ===========================================================
        //
        //
        //   Load user's task list when page opens
        //
        // ============================================================

        var userId = $('div#userId').data('id');
        console.log('inside application.js  line 70');
        console.log("$('div#userId').attr('data-id')");
        console.log(userId);

        reloadTasks(userId);

        // ===========================================================
        //
        //
        //   Trap create Task button click ( cross icon)
        //   ... and default due date to current date
        //
        // ============================================================
        $('#createTaskButton').on('click', function(event) {
          // populate the date field in the _taskcreatemodal.ejs template

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

          // load user's task data into modal

          event.preventDefault();
          var thisTask = findByTaskId(this.id);
          console.log(thisTask);
          console.log(thisTask.due_date);
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



   } // end of user's Page  !!!

});
