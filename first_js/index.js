/*

<variables>
var a
let a
const a

<Data type>
String: "Hello"
number: 382
floats: 2.43
boolean: true, false

<Array>
const person = ["James", "nami", "talon"]
person[2] // "talon"

<Object>
const personInfo = {
    name: "jo",
    age: 22,
    gender: "Male",
    isAlive: true
}
personInfo.name // "jo"

<Array + Object>
const a = [{A: "a", B: "b"}, "league", "of", 123]
a[0].B // b

const b = {
    names: ["amy", "bob", "chirst"]
    ages: [0, 1, 2, 3, 4]
}
b.ages[2] // 2

<function>
function sayHello(name){
    console.log("Hello", name);
}
sayHello("Jo");

<DOM Functions>
document.getElementById("ID-name")
documnet.querySelector("#ID-name")
documnet.querySelector(".Class-name")

<String new version>
name = "Jo"
age = 12
`Hello ${name} you are ${age} years old` // backtick

<function inside Object>
const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    multiply: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    },
    power: function(a, b){
        return a ** b;
    }
}
calculator.plus(3, 4);

<Event>
.addEventListenner("condition", function) // function() (x), function (o)


<conditions>
if-else
if(condition) {
    block
} else if{
    block
} else {
    block
}

(===, !==, >, >=, <, <=)
(&& ||)

MDN
*/
const first = document.querySelector("#first")

function handleClick(){
    first.style.backgroundColor = "red";
}
first.addEventListener("click", handleClick)