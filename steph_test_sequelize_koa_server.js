
//  the purpose of this test is to see if sequelize runs with koa

var koa = require('koa');

var Sequelize = require('sequelize');
var pg = require('pg');
var pgHstore = require('pg-hstore');

var user = "stephaniebeaton";


// Or you can simply use a connection uri
var sequelize = new Sequelize('postgres://stephaniebeaton:@localhost:5432/bookstore');


var koa = require('koa');

var app = koa();

// Or you can simply use a connection uri
var sequelize = new Sequelize('postgres://stephaniebeaton:@localhost:5432/bookstore');

app.use(errorHandler());
app.use(createTableUser());


function errorHandler() {
  return function* (next) {
      // we catch all downstream errors here
      try {
         yield next;
      } catch (err) {
        console.log('err');
        console.log(err);
        // set response status
        this.status = 500;
        // set response body
        this.body = 'internal server error';
        // can emit on app for log
        // this.app.emit('error', err, this);
      }
    };
  }

  function createTableUser() {
    return function* (next) {

     console.log('before sequelize.define');

     // THIS IS THE SCHEMA


     // define a Model

     // To define mappings between a model and a table,
     // use the define method.
     // Sequelize will then automatically add the attributes createdAt and updatedAt to it.
     var User = sequelize.define('myuser', {
                firstName: {
                  type: Sequelize.STRING,
                  field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
                },
                lastName: {
                  type: Sequelize.STRING
                }
              }, {
                freezeTableName: true // Model tableName will be the same as the model name
              });

      console.log('before User.sync');

      // sequelize.sync() will, based on your model definitions, create any missing tables.
      // If force: true it will first drop tables before recreating them.
      var userJohnHancock = yield User.sync({force: true}).then(function () {
                                          // Table created
                                          return User.create({
                                            firstName: 'John',
                                            lastName: 'Hancock'
                                          });
                                        });
      console.log(userJohnHancock);


      var foundUser = yield User.findById(1);

      console.log("foundUser");
      console.log(foundUser);

      yield next;

    };
  }

  app.listen(3000);
