var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow<4){
    greeting = "Good evening!"
}else if(hourNow<12){
	greeting = "Good moring";
}else if(hourNow<18){
	greeting = "Good afternoon"
}else{
	greeting = "Good night!";
}
document.write('<h3>'+greeting+'</h3>')