var old_kitten = "Kitten1";
var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
var x5 = 0;


$("#Kitten1").click(function(){
    x1 = x1 + 1;
    document.getElementById("count1").innerHTML = "count = " + x1;
});
$("#Kitten2").click(function(){
    x2 = x2 + 1;
    document.getElementById("count2").innerHTML = "count = " + x2;
});
$("#Kitten3").click(function(){
    x3 = x3 + 1;
    document.getElementById("count3").innerHTML = "count = " + x3;
});
$("#Kitten4").click(function(){
    x4 = x4 + 1;
    document.getElementById("count4").innerHTML = "count = " + x4;
});
$("#Kitten5").click(function(){
    x5 = x5 + 1;
    document.getElementById("count5").innerHTML = "count = " + x5;
});


function showImage(kitten){
    document.getElementById(old_kitten).style.display = "none";
    document.getElementById(kitten).style.display = "block";
    old_kitten = kitten;
}
