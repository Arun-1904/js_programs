var arr = [1, 2, 3, 4, 5];
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])

//index ->0 to 4

for (let i = 0; i < 5; i++)
    console.log(arr[i]);


var num = 968; //9+6+8=>23// 2+3=>5

var r = Math.floor(num / 10)
console.log(r)//96
var t = Math.floor(r / 10);
console.log(t)//9
var r1 = r % 10;
console.log(r1)//6
var rem = num % 10;
console.log(rem)//8
var sum = t + r1 + rem;
var final = sum % 10 + Math.floor(sum / 10);
console.log(final)

//functions

// function funName(arg){
//     //body
// }


function funName(arg) {
    //body
    console.log('hiiii ', arg)
}
funName();//hiiii undefined
funName('Ajay');//hi Ajay

function funName1(arg = 'Guest')//default value
{
    //body
    console.log('hiiii ', arg)
}
funName1();//hiiii Guest
funName1('Ajay');//hi Ajay
console.log(funName1)
let funName2 = function (arg = 'Guest')//default value
{
    //body
    console.log('hiiii ', arg)
}
funName2();
funName2('vinay');
console.log(funName2)

let inner = function () {
    console.log('inner function called');
}
function outer(funArg) {
    funArg();
}

outer(inner);

let add = function (a, b) {
    return a + b;
}
let sub = function (a, b) {
    return a - b;
}
function calcArea(x, y, addFn) {

    return addFn(x, y);
}
function userIn() {
    //get input from user
    //prompt
    //prompt - choose operation
    //1. add, 2.sub
    //user - 1===chooses add()
    console.log(calcArea(10, 34, add));
}
function algebra(addFn) {
    console.log(add(11, 2));
}
userIn()
algebra(add);

//  let message = "Hello, I'm JavaScript!"; // local variable
function localVar() {
    let message = "Hello, I'm JavaScript!"; // local variable
    console.log(message);
}
//console.log(message);//defined in function and it is let var which visible only inside function

let userName = 'John';

function showMessage() {
    userName = "ultron";
    let message = 'Hello, ' + userName;
    console.log(message);
}
console.log('before fn call ', userName);
showMessage();
console.log('after fn call ', userName);

for (let a = 1; a < 11; a++) {
    if (a % 2 == 0)
        console.log('hello ', a)
    else
        console.log('hi ', a)
}

function normalFun(event) {
    console.log(this, event);//window
}
//normalFun();

let normalFun1 = (e) => {
    console.log(this, e);//window
}
//normalFun1();
// //event listener
// document.getElementById("btn").addEventListener('click', normalFun1);
// normalFun();

let double = n => n * 2;
console.log(double(2));

let sum1 = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
};

console.log(sum1(1, 2)); // 3

//var =a2 + b2 + c2 + 2ab + 2bc + 2ca
//ans=a3 – 3a2b + 3ab2 – b3
//ans=a3 – b3 – 3ab(a – b)

//3a2b //60
function eval1(u, v) {
    return 3 * (Math.pow(u, 2) * v)
}
var a = 2; b = 5;
Math.pow(a, 3) - eval1(a, b)

function mult(x, y) {
    return 2 * (x * y);
}

function power2(z) {
    return Math.pow(z, 2)
}

function main(a, b, c) {
    return power2(a) + power2(b) + power2(c) + mult(a, b) + mult(b, c) + mult(c, a);
}
var res = main(1, 1, 1)
console.log(res)

// 2nd  //ans=a3 – 3a2b + 3ab2 – b3
function power3(t) {
    return Math.pow(t, 3)
}

function power4(u) {
    return Math.pow(u, 2)
}

function multiply(v, w) {
    return 3 * (v * w)
}
function algebra(a, b) {
    var final = power3(a) - multiply(power4(a), b) + multiply(a, power4(b) + power3(b))
    console.log("the final answe is", final)
}
algebra(1, 1)


// var j = prompt("enter any number:");
// for (let n = 1; n <= j; n++) {
//     var flag = 0;
//     if (n == 1) {
//         flag = 1;
//     }
//     for (let i = 2; i <= n / 2; ++i) {
//         if (n % i == 0) {
//             flag = 1;
//             break;
//         }
//     }
//     if (flag == 0) {
//         console.log(n + " is prime number");
//     }
// }


// another method

// for (var limit = 2; limit <= 20; limit++) {
//     var flag = true;
//     for (var i = 2; i <= limit; i++) {
//         if (limit % i == 0 && i != limit)
//             flag = false

//             if(flag==true){
//                 console.log(limit)
//             }
//     }
// }

let arr1 = [
    { product: 'one', price: 10000 },
    { product: 'two', price: 8000 },
    { product: 'three', price: 1900 },
    { product: 'four', price: 10000 },
]
console.log(arr1)

var newArray = arr1.filter(function (price) {
    return arr1.price >= 10000
})

console.log(newArray)

