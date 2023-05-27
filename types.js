let text; // adding the string to text will tell typescript that text will permently string and should not be change
let age; // setting age value to integer
let isReady; // setting  value to boolean
let item; // This will allow store items of any value be it [string,integer,boolean]
// array types
let names; // this creates an array with the type sololy string. This means that it will only contain string
let nums; //this creates an array with the type sololy integer. This means that it will only contain integer
let items; // This takes in array of both Strings and  integer
text = "Hello welcome to typescript";
console.log(text);
names = ['Joseph', "syntax"];
nums = [1, 2, 3, 4, 3];
//  type in functions
function cal(x, y) {
    let total = x + y;
    return total;
}
console.log(typeof cal(2, 3));
// setting functions as types
// here we tell ts that it should return a string from this function
function string_function() {
    return "hello world";
}
function num_function(a, b) {
    return a + b;
}
// this tells ts that the varible is going to be a function and it will be returing a string
let str_universal;
str_universal = string_function;
console.log(str_universal());
let num_universal;
num_universal = num_function;
console.log(num_function(1, 3));
// setting object type
const car = {
    name: "avalon",
    year: 2023
};
car.year = 23;
// union type 
// union allows us to declear more than one possible type a variable can have
// so in this case the user id can only be number or string
let user_id;
user_id = 123; // this will go
user_id = "aj001";
