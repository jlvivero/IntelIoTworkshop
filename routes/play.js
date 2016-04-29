var upmBuzzer = require("jsupm_buzzer");
var myBuzzer = new upmBuzzer.Buzzer(5);
var chords = [];
//var sleep = require("sleep");
chords.push(upmBuzzer.DO);
chords.push(upmBuzzer.RE);
chords.push(upmBuzzer.MI);
chords.push(upmBuzzer.FA);
chords.push(upmBuzzer.SOL);
chords.push(upmBuzzer.LA);
chords.push(upmBuzzer.SI);
chords.push(upmBuzzer.DO);
chords.push(upmBuzzer.SI);
var chordIndex = 0;
var i = 0;
var j = 0;
var timer;
var number;
var notes;
var body;
var time;
var flag = false;
var n = 1;

/*var recurse = function(number,time,body){ 
    console.log(body);
    var j = 0;
    timer = setInterval(function(){
            //console.log(body);
            myBuzzer.playSound(chords[body.notes[i]],time);
            i = i+1;
            console.log("i dentro de interval");
            console.log(i);
    },100);
    console.log("i dentro de recurse");
    console.log(i);
    console.log(i<number);
    while(j < 10){
        j++;
    }
    if(i < number){
        recurse(number,time,body);
    }
    else{
        //clearInterval(timer);
        return "success";
    }
}*/


var play = function(req,res){
    number = req.body.number;
    var response = "";
    notes = {};
    body = req.body;
    time = 50000;
    console.log("i got here");
    //myBuzzer.playSound(chords[body.notes[i]],time);
    //response = recurse(number,time,body);
    while(j < number){ 
        while(i < 2000){
            /*while(!flag){
                console.log("HOLA");
                if(n == 1){
                    n = 2;
                    console.log("PLEASEGETHERE");
                    timer = setTimeout(call,1000); 
                    //clearTimeout(timer);
                    flag = true;
                }
            }*/
            //myBuzzer.stopSound();
            //n = 1;
            //flag = false;
            console.log(i);
            i++;
        }
        myBuzzer.playSound(chords[body.notes[0]],time);
        i = 0;
        j++;
    }
    res.send("maybe"); 
}

/*function call(){
        myBuzzer.playSound(chords[body.notes[i]],time);
        i = i+1;
        //console.log(timer[j]);
        j = j+1;
        console.log("i dentro de interval");
        console.log(i);
        //flag = true;
        clearTimeout(timer);
}*/

module.exports = play;