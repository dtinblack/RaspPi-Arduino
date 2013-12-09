var SerialPort = require("serialport").SerialPort;
var portName = "/dev/ttyACM0";

var sp = new SerialPort(portName, { baudrate: 9600 });

sp.on("open", function() {
    console.log("port opened ...");
});

sp.on("error", function(err) {
     console.error("error", err);
});

sp.on("data", function(data) {
  console.log("serial port: " + data.toString());
});
