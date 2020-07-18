console.log("hello");
function runInBrows(){
    return intToString();
}

var intToString = () =>{
    var number = new Number(1000);
    console.log("number",number);
    console.log("number",number.toString());
    return number.toString();
}

document.getElementById("demo").innerHTML = runInBrows();