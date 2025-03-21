//! JavaScript Data Types

//? JavaScript has two main categories of data types:

//?  1. Primitive Data Types (Immutable, stored by value)
//?  2. Non-Primitive (Reference) Data Types (Mutable, stored by reference)


// ^ ...........................................................................................


//! 🔹 1. Primitive Data Types
//? Primitive data types hold only a single value and are stored directly in memory.
//? Primitive datatypes are - String, Number, Bigint, Boolean, Undefined, Null and Symbol.

//^ NOTE -> The "typeof" operator is used to check the datatype of any variable.

//* a.  String - Represents text enclosed in quotes.
let course = "CoderArmy";
console.log(course);
console.log(typeof course);

//* b. Number - Represents integers and floating points.
let num = 101;
let num2 = 1001.25;
console.log(num);
console.log(num2);
console.log(typeof num);
console.log(typeof num2);

//* c. BigInt - For very large numbers. 
let bignum = 12345678987654321n;
console.log(bignum);
console.log(typeof bignum);

//* d. Boolean - Represents true or false values.
let bool = true;
console.log(bool);
console.log(typeof bool);

//* e. Undefined - A variable declared but not assigned a value.
let x;
console.log(x);
console.log(typeof x);

//* f. Null - Represents an intentional empty or unknown value.
let y = null;
console.log(y);
console.log(typeof y);

//* g. Symbol - Represents unique identifiers (used for object properties).
let sym = Symbol('unique');
console.log(sym);
console.log(typeof sym);


// ^ The type of  "null" is "object" which is a mistake in javascript.


//^ ....................................................................................



//! 🔹 2. Non-Primitive (Reference) Data Types
//?  Non-primitive types do not store the actual value but a reference to memory.
//? These include object, array and function. 


//* a. Array - Ordered list of values.The type of array is object because it is implemented using object in js.
let arr = [1,5,9,16,"error"];
console.log(arr);
console.log(typeof arr);


//* b. Object - A collection of key-value pairs.
let obj = {
    fname : "paras",
    age : 30,
    course : "btech"
};
console.log(obj);
console.log(typeof obj);


//* c. Function - A block of reusable code. It can be assigned to a variable.
let fun = function(){
    console.log("Hello Coder Army");
}
fun();
console.log(typeof fun);



















