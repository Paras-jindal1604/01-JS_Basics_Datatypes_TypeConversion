

//! 🔹 Type Conversion in JavaScript
//? Type conversion in JavaScript refers to changing one data type into another.
//?  It can be implicit (automatic) or explicit (manual).

// ^ ...................................................................................

//* 🔹 1. Implicit Type Conversion (Type Coercion)
//? JavaScript automatically converts one type to another when needed.


//^ a. 🔸 String Conversion (Number → String)
//? Numbers automatically convert to strings when used with + (concatenation).

console.log(5 + "5"); 
console.log(true + "test"); 

//^ b. 🔸 Number Conversion (String → Number)
//?  When -, *, /, or % are used, strings are converted to numbers.

console.log("5" - 2); 
console.log("10" * "2"); 
console.log("5" - "hello"); 

// ^ c. 🔸 Boolean Conversion
//? Truthy values (non-empty strings, numbers other than 0) convert to true.
//? Falsy values (0, "", null, undefined, NaN) convert to false.

console.log(Boolean(1)); 
console.log(Boolean(0)); 
console.log(Boolean("Hello")); 
console.log(Boolean("")); 


// ^ .....................................................................................................


//*  🔹 2. Explicit Type Conversion (Type Casting)
//? You can manually convert data types using JavaScript functions.

//^ a. 🔸 Convert to Number
//? Use Number(value), parseInt(), or parseFloat() to convert a string to number.
//? The output NaN(Not a Number) is given when string cant be converted to number as it contains alphabets.

console.log(Number("123")); 
console.log(Number("123abc")); 
console.log(Number("3.14")); 
console.log(parseInt("42px")); 
console.log(parseFloat("3.14abc")); 
console.log(Number("hello")); 
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));

let x;
console.log(Number(x));


// ^ b. 🔸 Convert to String
//? Use String(value) or .toString() to convert to string.

console.log(String(100)); 
console.log((123).toString()); 
console.log(String(true)); 


// ^ c. 🔸 Convert to Boolean
// ? Use Boolean(value) to convert to boolean.

console.log(Boolean(1)); 
console.log(Boolean(0)); 
console.log(Boolean("")); 
console.log(Boolean("hello"));
console.log(Boolean(" "));

























