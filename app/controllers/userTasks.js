var db = require('../models/index.js');

module.exports = {

  // GET    /users/2/tasks   - Retrieves list of tasks for user #2
  // GET    /users/2/tasks/8 - Retrieves task #8 for user #2
  // POST   /users/2/tasks   - Creates a new task in user #2
  // PUT    /users/2/tasks/8 - Updates task #8 for user #2
  // DELETE /users/2/tasks/8 - Deletes task #8 for user #2

  // router
  //   .get('/users/:userId/tasks',         tasksCtrl.getListOfTasksForUser)
  //   .get('/users/:userId/tasks/:taskId', tasksCtrl.getTaskforUser)
  //   .post('/users/:userId/tasks',        tasksCtrl.createTask)
  //   .put('/users/:userId/tasks/:taskId', tasksCtrl.updateTask)
  //   .del('/users/:userId/tasks/:taskId', tasksCtrl.removeTask);

  // -------------------------------------------------------------
  //
  //     get list of tasks for user
  //
  // -------------------------------------------------------------
  getListOfTasksForUser: function* getListOfTasksForUser(next) {


    user = this.state.user;
    // var tasks = yield user.getTasks(); // gets you all tasks
    //console.log('tasks');
    //console.log(tasks);


    if (!user) {
      console.log("The user with UserId = " + this.state.userId + " does not exist.");
      this.body = "The user with UserId = " + this.state.userId + " does not exist.";
    } else {
      var tasks = yield user.getTasks(); // gets you all tasks
      // console.log('tasks');
      // console.log(tasks);
    
      // iterate through tasks extract keyvalue "dataValues"
      var mappedTasks = [];
      
      tasks.forEach(function (task) {
        mappedTasks.push( task["dataValues"]);
        });
      this.body = mappedTasks;
      yield next;
    }
  },

  // -------------------------------------------------------------
  //
  //     get Task for user
  //
  // -------------------------------------------------------------
  getTaskforUser: function *getTaskforUser(next) {
    console.log('GET    /users/2/tasks/8');
    this.body = this.state.task.dataValues;
    yield next;
  },

  // -------------------------------------------------------------
  //
  //     create task for user
  //
  // -------------------------------------------------------------
  createTask: function *createTask(next) {
    console.log('POST   /users/' + this.state.userId + '/tasks');



    console.log('this.request.body');
    console.log(this.request.body);

    var task = this.request.body;


    var newTask = yield db.sequelize.models.Task.create({description: task.description,
                                                 due_date: task.due_date,
                                                 recurring: task.recurring,
                                                 completed: task.completed,
                                                 postponed: task.postponed,
                                                 priority:  task.priority,
                                                 UserId:   this.state.userId});

    // var newTask = yield db.sequelize.models.Task.create({description: "Test description",
    //                                            due_date: Date.now(),
    //                                            recurring: false,
    //                                            completed: false,
    //                                            postponed: false,
    //                                            priority:  1,
    //                                            UserId:   1 });


     this.body = newTask.dataValues;

    yield next;
  },



  // -------------------------------------------------------------
  //
  //     update task for user
  //
  // -------------------------------------------------------------
  updateTask: function *updateTask(next) {
    console.log('PUT    /users/2/tasks/8');


    // Post.update({
    //   updatedAt: null,
    // }, {
    //   where: {
    //     deletedAt: {
    //       $ne: null
    //     }
    //   }
    // });
    // console.log('this.request.body');
    // console.log(this.request.body);

    // console.log("immediately before this.req.body");
    // console.log(this.req.body);
    // console.log('this.req.body');
    // console.log("immediately after this.req.body");

    // console.log('this.state.taskId');
    // console.log(this.state.taskId);

    // // console.log('this.request');
    // // console.log(this.request);

    // console.log('this.request.body');
    // console.log(this.request.body);


    var task = this.request.body;

    task.description = task.description || 'web page update did not pass description to server';
    task.due_date    = task.due_date || Date.now();
    console.log('task.priority');
    console.log(task.priority);
    if (typeof task.priority == 'undefined') { task.priority =  1;}

    console.log('task.priority');
    console.log(task.priority);

    task.recurring   = task.recurring || false;

    var updatedTask = yield db.sequelize.models.Task.update({description: task.description,
                                                             due_date:    task.due_date,
                                                             priority:    task.priority,
                                                             recurring:   task.recurring},
                                                             {where: {
                                                                 id: task.id}


//Brittany's
    // var updatedTask = yield db.sequelize.models.Task.update({description: this.request.body.description},
    //                                                          {where: {
    //                                                              id: this.request.body.id

    //                                                            }
                                                             });


    console.log('updatedTask');
    console.log(updatedTask[0]);

    this.body = updatedTask.dataValues;

    yield next;
  },

  // -------------------------------------------------------------
  //
  //     remove task for user
  //
  // -------------------------------------------------------------
  removeTask: function *removeTask(next) {
    console.log('DELETE /users/' + this.state.userId + '/tasks/' + this.state.taskId);


    var deletedTask = yield db.sequelize.models.Task.destroy({where: {
                                                                 id: this.state.taskId
                                                               }
                                                             });

    console.log('deletedTask');
    console.log(deletedTask)
    yield next;
  }

};


