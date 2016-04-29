var express = require('express');
var router = express.Router();
var upmBuzzer = require("jsupm_buzzer");
var myBuzzer = new upmBuzzer.Buzzer(5);

var play = require('./play');


router.post('/play', play);
router.get('/stopPLEASE',function(req,res){
    myBuzzer.stopSound();    
    res.send("IM SORRY");
});

module.exports = router;
