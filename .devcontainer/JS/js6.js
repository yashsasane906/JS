// Primitive data types 
// 7 tyoes : string,number,boolean,null,undefined,symbol.bigint

const score = 100  

const scoreValue = 100.3
const outsidetemp = null
let userEmail;

const id = Symbol('1234')
const idnumber = Symbol('1234')

console.log(id==idnumber); 

 // Reference type (Non primitive)

//array , Object , Functions 

const heros = ["IRONMAN","CAPAMERICA","THOR"] //array
console.log(heros);

let myobj = {
 name: "yash",
 age:21,    
}

const myfunction =function(){
    console.log("hello world");
}

console.log(typeof myfunction); // function object 


console.log(typeof id); // sybmol 