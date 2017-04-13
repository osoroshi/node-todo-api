// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('57bb36afb3b6a3801d8c479d')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('User').find().count().then((count) => {
    console.log(`User count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('User').find({name:'Tim'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  },  (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.close();
});
