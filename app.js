var express = require('express');
var app = express();

app.get('/', function(req, res, next) {
  res.send('hello');
});

app.get('/throw', function(req, res, next) {
  throw new Error('ooops');
  // -> HTTP 500 process still running
});

// VS

app.get('/throw2', function(req, res, next) {
  setTimeout(function() {
    throw new Error('ooops');
    // -> Uncaught exception -> node process exit
  }, 0);
});

app.listen(process.env.PORT || 5000);


// WHY ?
// learn about the callstack, callback queue, and the eventloop
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// playground: http://latentflip.com/loupe/


