function calculateTip(){
    var billamt=
    document.getElementById("billamt").value;
    var servicequal =
    document.getElementById("servicequal").value;
    var peopleamt=
    document.getElementById("peopleamt").value;
if(billamt==""||servicequal==0){
    alert("please enter values");
    return;
}
if(peopleamt==""|| peopleamt<=1){
    peopleamt=1;
    document.getElementById("each").style.display="none";
}
else{
    document.getElementById("each").style.display="block"
}
var total=(billamt*servicequal)/peaopleamt;
total=Math.round(total*100)/100;
total=total.toFixed(2);
document.getElementById("totaltip").style.display="block";
document.getElementById("tip").innerHTML=total;
}
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";
document.getElementById("calculate").onclick=
function(){
    calculateTip();
}

