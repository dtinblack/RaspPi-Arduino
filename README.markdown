# Connecting an Arduino to a Raspberry Pi

Connect an Arduino to a Raspberry Pi and send a "Hello World"
message to the web.

The software is development and run via the Terminal.

## Hardware

* Raspberry Pi
* Arduino Uno
* USB 2.0 A to B Cable
* Edimax Wireless 802.11b/g/n nano USB Adaptor


## Software

* Nodejs: v0.10.21  ( updated version from original Raspbian installation )
* NPM: v1.3.11      ( updated version from original Raspbian installation ) 
* GNU Make v3.81

# Software Setup

## Update the sources of software on the Raspberry Pi:

    sudo apt-get update

### followed by: 

    sudo apt-get upgrade
    
### Once in a while make sure that the distribution is up to date with ( which may take some time ):
 
    sudo apt-get dist-upgrade
    
### Finally, clean up with: 

    suod apt-get clean
            
## Install Nodejs packages

### Install the Nodejs package Socket.io to talk to the web

    npm install socket.io

### Install the Nodejs package Serialport to talk to the Arduino

    npm install serialport
    
## Install Arduino for Terminal Commands - see the [Linux Circle step-by-step guide ] ( http://www.linuxcircle.com/2013/05/15/programming-and-uploading-arduino-sketch-without-ide/ )
 
# Running Arduino-Raspberry Pi

### Transfer software to the Arduino:

    make upload
    
### Start the server on the Raspberry Pi

    node server.js
    
### Connect via a web browser on port 8080 ( or the port that you have set )       
    
# Thanks

To the [Linux Circle] (http://www.linuxcircle.com ) for a [step-by-step guide] 
(http://www.linuxcircle.com/2013/05/15/programming-and-uploading-arduino-sketch-without-ide/).
to installing Arduino ready for running via Terminal Commands. [How-To Geek] ( http://www.howtogeek.com ) for a [step-by-step 
guide] ( http://www.howtogeek.com/169679/how-to-add-a-printer-to-your-raspberry-pi-or-other-linux-computer/) on 
how to add a printer to the Raspberry Pi. Joseph Cheng's [Github code] ( https://github.com/indiejoseph/arduino-node.js-serialport-socket.io ) 
that gave me a few clues on how to improve my software. Finally, [Simon The Pi Man]( http://simonthepiman.com/index.php ) for 
a helpful tutorial about increasing disk space, and many useful tips, about managing the Raspberry Pi. 

# Licence

[See licence] ( https://github.com/dtinblack/RaspPi-Arduino/blob/master/LICENSE )

