const _ = require('lodash');
const express = require('express')
const app = express()
//To make Node understand JSON POST bodies and JWTs.
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
app.use(bodyParser.json());
//

app.use(expressJwt({secret: 'app-super-shared-secret'}).unless({path: ['/api/auth']}));
app.post('/api/auth', function(req, res) {
  const body = req.body;

  const user = USERS.find(user => user.username == body.username)
//jwt.sign(payload, secretOrPrivateKey, [options, callback])

//Payload — an encoded JSON object containing the data, the real body of the token
//secretOrPrivateKey is an any encryption shared secret key—this is what we’ve used in our app, for simplicity—or an RSA/ECDSA encryption private key.
//Options represents a variety of options that can be passed to the encoder in the form of key-value pairs
//callback is a function to call after encoding is done, should one wish to handle encoding the token asynchronously 
if(!user || body.password != 'password') return res.sendStatus(401);
  var token = jwt.sign({userID: user.id}, 'app-super-shared-secret', {expiresIn: '1h'});  res.send({token}); });


var TODOS = [
    { 'id': 1, 'user_id': 1, 'name': "Task 1", 'completed': false },
    { 'id': 2, 'user_id': 1, 'name': "Task 2", 'completed': true },
    { 'id': 3, 'user_id': 2, 'name': "Task 3", 'completed': false },
    { 'id': 4, 'user_id': 3, 'name': "Task 4", 'completed': false },
];
var USERS = [
    { 'id': 1, 'username': 'jay' },
    { 'id': 2, 'username': 'vijay' },
    { 'id': 3, 'username': 'sanjay' },
];


function getTodos(userID) {
    var todos = _.filter(TODOS, ['user_id', userID]);

    return todos;
}
function getTodo(todoID) {
    var todo = _.find(TODOS, function (todo) { return todo.id == todoID; })

    return todo;
}
function getUsers() {
    return USERS;
}


app.get('/api/todos', function (req, res) {
    res.type("json");
    res.send(getTodos(1));
});
app.get('/api/todos/:id', function (req, res) {
    var todoID = req.params.id;
    res.type("json");
    res.send(getTodo(todoID));
});
app.get('/api/users', function (req, res) {
    res.type("json");
    res.send(getUsers());
});
app.get('/', function (req, res) {
    res.send('Angular JWT Todo API Server')
});
app.listen(4000, function () {
    console.log('Angular JWT Auth API Server listening on port 4000!')
});
