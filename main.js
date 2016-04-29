/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */

/*
A simple node.js application intended to blink the onboard LED on the Intel based development boards such as the Intel(R) Galileo and Edison with Arduino breakout board.

MRAA - Low Level Skeleton Library for Communication on GNU/Linux platforms
Library in C/C++ to interface with Galileo & other Intel platforms, in a structured and sane API with port nanmes/numbering that match boards & with bindings to javascript & python.

Steps for installing MRAA & UPM Library on Intel IoT Platform with IoTDevKit Linux* image
Using a ssh client:
1. echo "src maa-upm http://iotdk.intel.com/repos/1.1/intelgalactic" > /etc/opkg/intel-iotdk.conf
2. opkg update
3. opkg upgrade

Article: https://software.intel.com/en-us/html5/articles/intel-xdk-iot-edition-nodejs-templates
*/
//boiler plate for rest API
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = module.exports.app = exports.app = express();
var request = require('request');

var mraa = require('mraa'); //require mraa

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', require('./routes'));
app.get('/', function(req, res){
	res.send("prueba");
});

console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the Intel XDK console

//var myOnboardLed = new mraa.Gpio(3, false, true); //LED hooked up to digital pin (or built in pin on Galileo Gen1)
var myOnboardLed = new mraa.Gpio(13); //LED hooked up to digital pin 13 (or built in pin on Intel Galileo Gen2 as well as Intel Edison)
myOnboardLed.dir(mraa.DIR_OUT); //set the gpio direction to output
var ledState = true; //Boolean to hold the state of Led

periodicActivity(); //call the periodicActivity function

var callback = function(){
    setTimeout(periodicActivity,1000);
}

function periodicActivity(callback){
  myOnboardLed.write(ledState?1:0);
  //chordIndex = Math.floor(Math.random() * 8);
  callback;
  //console.log(chordIndex);
  ledState = !ledState;
  setTimeout(periodicActivity,1000);
  //myOnboardLed.write(ledState?1:0); //if ledState is true then write a '1' (high) otherwise write a '0' (low)
  //ledState = !ledState; //invert the ledState
  //setTimeout(periodicActivity,2000); //call the indicated function after 1 second (1000 milliseconds)
}

app.listen(3000);
