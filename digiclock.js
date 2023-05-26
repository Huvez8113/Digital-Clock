function clock(){
    const Months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const Days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var date = new Date()
    var day = date.getDate()
    // var mon = date.getMonth()
    var year = date.getFullYear()
    var hrs = date.getHours()
    var mins = date.getMinutes()
    var secs = date.getSeconds()
    var am_pm = document.getElementById("ampm")
     if(hrs>=12)
     {
       am_pm.innerHTML=`PM`
     }
     else{
       am_pm.innerHTML=`AM`
     }
    if(hrs>12){
       hrs = hrs - 12
    }
    document.getElementById("day").innerHTML = day+" "
    document.getElementById("mon").innerHTML = Months[date.getMonth()]
    document.getElementById("yr").innerHTML = year
    document.getElementById("days").innerHTML=Days[date.getDay()]
    document.getElementById("hrs").innerHTML = hrs+":"
    document.getElementById("min").innerHTML = mins+":"
    document.getElementById("sec").innerHTML = secs
   }
    setInterval(clock,1000)