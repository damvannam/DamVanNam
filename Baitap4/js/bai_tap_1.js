console.log("hello");
function runInBrows(){
    return GiaThua();
}
function intTong(){
    var ketqua = 0;
    for(var i =0; i < 100; i++){
        ketqua = ketqua + i;
    }
    return ketqua;
}
function GiaThua(){
    var ketqua = 1;
    for(var i = 1; i <= 10; i++){
        ketqua = ketqua * i;
    }
    return ketqua;
}

document.getElementById("demo").innerHTML = runInBrows();