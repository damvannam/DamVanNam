console.log("hello");
function runInBrows(){
    return strSplit();
}

var chartAt = function(){
    var myString = 'jQuery FTM';
    return myString.charAt(7);
}

var strContac = () =>{
    var str = "This content ";
    return str.concat("is good .!")
}

var strIsMatch = () =>{
    var intre = /[0-9 -()+]+$/;
    var number = "999";
    var isN = number.match(intre);
    console.log("isN",isN);
    return isN ? "true" : "false";
}

var strReplace = () =>{
    (() =>{
        var strRes = "999 this reps";
        console.log(strRes.replace("999",""));
    }) ();
}

var strSplit = () =>{
    const strP = "Chuoi can chia ra hai dau cach";
    console.log(strP,strP.split(" "));
}

document.getElementById("demo").innerHTML = runInBrows();