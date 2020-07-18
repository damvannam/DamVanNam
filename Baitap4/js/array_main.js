
console.log("hello");
function runInBrows(){
    return arrFilte();
}

Array.prototype.layGiaTriDau = function(){
    console.log(this);
    return this[0];
}
//Array LiFo
function liFo(){
    var arr1 = [10,9,8,7];
    return arr1.pop();
}
//Array FiFo
function fiFo(){
    var arr1 = [10,9,8,7];
    return arr1.shift();
}
// Array Sort
function arrSort(){
    var arr1 = [10,100,8,200];
    return arr1.sort((soa,sob) => soa - sob);
}

function arrConcat(){
    var arr1 = [10,100,8,200];
    var arr2 = [10,100,8,200];
    return arr1.concat(arr2);
}

//kiem tra neu ctat car thanh phan trong mang deu thoa man dk thi
// return true nguoc ai return false
function arrEvery(){
    var arr1 = [10,100,8,200];
    const cond = arr1.every(item => item > 5);
    console.log("cond",cond);
    return cond;
}

//kiem tra neu 1 phan tu bat ki thoa man dk se return true
function arrSome(){
    var arr1 = [10,100,8,200];
    const cond = arr1.some(item => item > 5);
    console.log("cond",cond);
    return cond;
}

// Iterator ...
function arrIterator(){
    var arr1 = [10,100,8,200];
    for(var i =0; i<arr1.length;i++){
        console.log("gia tri cua mang: " + arr1[i]);
    }
    arr1.forEach(item =>{
        console.log("gia tri cua mang: " + item);
    })
}

// Reduc
function arrReducer(){
    var arr1 = [10,100,8,200];
    var tong = 0;
    for(var i =0; i<arr1.length;i++){
        tong = tong + arr1[i];
    }
    console.log(tong);
    return arr1.reduce((a,b) =>{
        return a + b;
    })
}

//map
function arrMap(){
    var arr1 = [10,100,8,200];
    const newArr =  arr1.map((item) =>{
        return{
            cong10: item + 10,
            nhan2: item * 2
        };
    });
    console.log(newArr);
}

//Filter
var arrFilte = () =>{
    var arr = [10,20,60];
    return arr.filter(item =>{
        return item>20;
    })
}


function arrayNew(){
    var arr1 = [10, 7, 9 ,9];
    var arr2 = new Array(100,9,8,7);
    const getFiri1 = arr1.layGiaTriDau();
    const getFiri2 = arr2.layGiaTriDau();
    return getFiri1 + " " + getFiri2;
}

document.getElementById("demo").innerHTML = runInBrows();