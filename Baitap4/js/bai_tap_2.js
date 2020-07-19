console.log("hello");
function runInBrows(){
    return xoa();
}

function chen(){
    var arr = [90,90,20,27,35,22,10,8,8];

    arr.splice(2, 0, 100);
    console.log(arr);
    return arr
}
function xoa(){
    var arr = [90,90,20,27,35,22,10,8,8];
    const arr1 = new Set(arr);
    console.log(arr1);
    const backToArray = [...arr1];
    return backToArray;
}

document.getElementById("demo").innerHTML = runInBrows();