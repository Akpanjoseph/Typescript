'use strict';
// object 1
const _car1 = {
    car_name: 'Avalon',
    speed: 40,
    color: 'white',
    company: 'Toyota'
};
console.log(_car1.car_name);
// object 2
const _car2 = {
    owner: "Syntax Designer",
    car_name: "lambougine",
    driver: 'syntax',
    company: "dr syn"
};
const { car_name, driver, company } = _car2;
console.log(car_name, driver, company);
