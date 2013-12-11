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
var count = 0;

sp.on("data", function(data) {

  if(data[data.length-1] == 0x0a) { // Check for NL = end of string
     count += 1;
     readData += data.toString();
     readData += " [ " + count.toString() + " ]";
     console.log("end of data");
     console.log(readData);
     io.sockets.emit("message", readData);
     readData="";
  } else {
     readData += data.toString();
  }

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
