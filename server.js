var http = require('http').createServer(handler),
    io = require('socket.io').listen(http),
    fs = require('fs');

http.listen(8080);
console.log("server started on localhost:8080");
  
var SerialPort = require("serialport").SerialPort;
var portName = "/dev/ttyACM0";

var sp = new SerialPort(portName, { baudrate: 9600 });

sp.on("open", function() {
    console.log("port opened ...");
});

sp.on("error", function(err) {
     console.error("error", err);
});


var readData="";

sp.on("data", function(data) {

  console.log("serial port: " + data.toString());

  readData += data.toString();

  io.sockets.emit("message", readData);

  readData="";

});


function handler(req, res) {
    fs.readFile(__dirname + '/index.html',
      function( err, data) {
         if (err) {
           res.writeHead(500);
           return res.end('Error loading index.html');
      }
      res.writeHead(200);
      res.end(data);
   });
}

io.sockets.on('connection', function(socket) {
     socket.emit('message', { arduinodata: 'hello from the server' });
});
