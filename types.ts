
let text :String; // adding the string to text will tell typescript that text will permently string and should not be change
let age: number // setting age value to integer
let isReady:boolean // setting  value to boolean
let item:any; // This will allow store items of any value be it [string,integer,boolean]

// array types
let names: String[] ; // this creates an array with the type sololy string. This means that it will only contain string
let nums:number[]; //this creates an array with the type sololy integer. This means that it will only contain integer
let items: any[] ; // This takes in array of both Strings and  integer

 text= "Hello welcome to typescript"

 console.log(text);

 names =['Joseph',"syntax"]

 nums = [1,2,3,4,3]
 

//  type in functions
function cal(x:number,y:number):number{ // this set the return type to number

    let total:number = x + y

    return total
}

console.log(typeof cal(2,3));


// setting functions as types

// here we tell ts that it should return a string from this function
function string_function():string{
    return "hello world"
    
}

function num_function(a:number , b:number):number{
    return a + b
}

// this tells ts that the varible is going to be a function and it will be returing a string
let str_universal :()=>string

str_universal = string_function

console.log(str_universal());

let num_universal : (v1:number,v2:number)=>number
num_universal = num_function
console.log(num_function(1,3));


// setting object type
const car:{name:string,year:number} ={
    name:"avalon",
    year:2023
}

car.year = 23 



// union type 
// union allows us to declear more than one possible type a variable can have

// so in this case the user id can only be number or string
let user_id : string | number;

user_id = 123 // this will go
user_id = "aj001"
