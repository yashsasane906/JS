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


//===========================================//
//=======HOW MEMORY WORKS====================//

// 2 TYPES OF MEMORY =>  

//+ stack are used in  (primitive data types)
//+ heap are used in  ( non primitive data types)


let myname = "yash"

let anothername = myname
anothername = "dishant"

console.log(anothername);

console.log(myname);


let user1 ={
    email: "yashsasane906@gmail.com",
    upi: "user@bl"
}

let user2 = user1

user2.email ="pradnyasasane@google.com"


console.log(user1.email);
console.log(user2.email);