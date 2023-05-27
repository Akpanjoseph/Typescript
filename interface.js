// interface - is a way to describe data for other objects to use 
const car1 = {
    name: 'avalon',
    owner: "syntax designer",
    year: 2023,
    hasFuel: true,
    info() {
        console.log(`This ${this.name} is owned by ${this.owner} . He bought the car on ${this.year} . The car has ${this.hasFuel ? 'fuel' : 'no fuel'}`);
    }
};
car1.info();
// interface on function
function start(car) {
    car.owner = 'Joseph';
    console.log(`starting ${car.name} . owned by ${car.owner}`);
}
start(car1);
