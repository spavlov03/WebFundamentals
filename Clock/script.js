function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log();
    console.log(time);
    var seconds = document.getElementById("seconds"); 
    var minutes = document.getElementById("minutes");
    var hour = document.getElementById("hour");
    seconds.style.transform = 'rotate('+(((new Date().getSeconds())*6)+180)+'deg)';
    // console.log("Seconds Deg " + seconds.style.transform);
    minutes.style.transform = 'rotate('+(((new Date().getMinutes())*6+180))+'deg)';
    // console.log("Minutes Deg" + minutes.style.transform);
    hour.style.transform = 'rotate('+((((new Date().getHours())*30)+((new Date().getMinutes())*0.5)+((new Date().getSeconds())*(360/43200)))+180)+'deg)';
    // console.log("Hour Deg" + hour.style.transform);

    // seconds.style.transform = 'rotate('+((time*6)+180)+'deg)';
    // console.log("Seconds Deg " + seconds.style.transform);
    // minutes.style.transform = 'rotate('+((time/10)+180)+'deg)';
    // console.log("Minutes Deg" + minutes.style.transform);
    // hour.style.transform = 'rotate('+((time/120)+180)+'deg)';
    // console.log("Hour Deg" + hour.style.transform);
    
    // your code here
}, 1000);