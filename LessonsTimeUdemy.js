/* This script executed in the console, calculates the total time of the 
current opened lesson of a Udemy Course */
var y = document.getElementsByClassName("panel-collapse collapse in");
var x = y[0].getElementsByClassName("curriculum-item--duration--1OEOp");
var i;
var hour=0;
var minute=0;
var second=0;
var tempMinute = 0;
var tempSecond = 0;
var time = 0;
for (i = 0; i < x.length; i++) {
    time = x[i].innerHTML;
	var splitTime= time.split(':');
    tempMinute = parseInt(splitTime[0]);
	console.log(tempMinute);
	tempSecond = parseInt(splitTime[1]);
	console.log(tempSecond);
	if(isNaN(tempMinute) || isNaN(tempSecond)){
	}
	else{
		
		minute = minute + tempMinute;
		second = second + tempSecond;
		
		console.log('Minute: ' + minute);
		console.log('Second: ' + second);
	}
	
}
hour = hour + minute/60;
minute = minute%60;
second = second%60;
alert(Math.round(hour) + ':' + Math.round(minute) + ':' +Math.round(second));
        
        
        
        