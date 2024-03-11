 const name ='YASH'
 const repocount = 50

 console.log (name +repocount + "value"); //node used we can use backticks `` below is the example 

 console.log(`hello my name is ${name} and my repo count is ${repocount}` );

 const gamename = new String('yash') // new way to declare a tring using js object
 console.log(gamename);
 console.log(gamename[0]);
 console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase()); // different function of string to give uppercase of string, index number , ect
 console.log(gamename.charAt(2)); //   on index 2 which alphabet is there
 console.log(gamename.indexOf('y')); //  on alphabet  y which index is there 
 
 // to check method in string see from console

 const newstring = gamename.substring(0,4)
console.log(newstring);

const anotherstring = gamename.slice (-3,4)
console.log(anotherstring);

const newstring1 = "           yash"
console.log(newstring1);
console.log(newstring1.trim())    // (only works on line space) this string function remove the spaces which can be easy to store the data in database with less space


const url = "https://yash,com/yash%20sasane"

console.log(url.replace('%20', '30'))  // replace %20 with 30 

console.log(url.includes('yash')) // does "yash" is included in the url - ans in true or false 


const splitfunction = "yash_30_10_2002"
console.log(splitfunction.split('_')); // this split fuction will convert the string into array based on some value for example "_"

