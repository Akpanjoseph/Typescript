'use strict'


interface Model{
    car_name?: string,
    speed?: number,
    color?: string,
    company?: string
}


// making data optional
interface Model2 extends Model{
    
    owner:string
    driver:string
    car_name: string,
    color?: string, // adding the ?  symbol the data becomes optional
    company?: string
    
}


// object 1
const _car1: Model ={
    car_name: 'Avalon',
    speed: 40,
    color: 'white',
    company: 'Toyota'
}

console.log(_car1.car_name);


// object 2
const _car2:Model2 ={
    owner : "Syntax Designer",
    car_name:"lambougine",
    driver: 'syntax',
    company: "dr syn"


}

const {car_name,driver,company} = _car2;

console.log(car_name,driver,company);

