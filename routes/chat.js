var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var router = express.Router();
//chat
const http = require('http').Server(app);
const io = require('socket.io')(http);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const Chat = require('../models/Chat');

app.get('/', (req, res) => {
  Chat.find({}).then(messages => {
    res.render('chat', {messages});
  }).catch(err => console.error(err));
});

io.on('connection', socket => {
  socket.on('chat', data => {
    Chat.create({name: data.handle, message: data.message}).then(() => {
      io.sockets.emit('chat', data); // return data
    }).catch(err => console.error(err));
  });
  socket.on('typing', data => {
    socket.broadcast.emit('typing', data); // return data
  });
});

// listen
http.listen(process.env.PORT || 3030, () => {
  console.log('Running');
});

module.exports = router;
