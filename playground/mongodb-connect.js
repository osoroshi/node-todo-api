const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if (err) {
console.log('Unabel to connect...');
  }
console.log('Connected to MongoDb Server');

// db.collection('Todos').insertOne({
//  test: 'something in todo list',
//  completed: false
//   }, (err,result) => {
// if (err) {
// return console.log('Unable to insert todo', err);
//   }
//   console.log (JSON.stringify(result.ops,undefined,2));
// })

db.collection('User').insertOne({
 name: 'Tim',
 age: 45,
 location: 'Sydney'
  }, (err,result) => {
if (err) {
return console.log('Unable to insert todo', err);
  }
  console.log (JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
})




db.close();
});
