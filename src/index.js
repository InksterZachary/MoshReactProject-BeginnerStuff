// !!-- Objects, this, binding --!!
// const person = {
//     name: 'Zachary',
//     walk() {
//         console.log(this);
//     }
// };
// //calls function from object
// person.walk();

// //sets walk to person function
// // const walk = person.walk;

// //by binding the object to the js function we are able to reference the object the way we want to
// const walk = person.walk.bind(person);

// //strict mode enabled by default so this will return undefine. It does not reference the window object
// walk();

// !!-- Arrow functions --!!
// // const square = function number(){
// //     return number * number;
// // }

//0 parameters = () 1 parameter = parameter 2+ parameters = (parameter, parameter)
// // const square = number => number * number;
// // console.log(square(5));

// const jobs = [
//     {id: 1, isActive: true },
//     {id: 2, isActive: false },
//     {id: 3, isActive: true },
// ];

//const activeJobs = jobs.filter(function(job) { return job.isActive; });
// // const activeJobs = jobs.filter(job => job.isActive);
// // console.log(activeJobs);

//Arrow functions and this
//When using the fat arrow and this, it does not rebind the this keyword, allowing us to still reference the object itself.
// // const person = {
// //     talk(){
// //         setTimeout(() => {
// //         console.log('this', this);
// //         }, 1000);
// //     }
// // };

// // person.talk();

// --!! Array.Map method !!--
// // const colors = ['red', 'green', 'blue'];
// // const items = colors.map(color => `<li>${color}</li>`);
// // console.log(items);

//!!-- Object Destructuring --!!
// // const address = {
// //     street: '',
// //     city: '',
// //     country: ''
// // };

// const street = address.street;
// const city = address.city;
// const country = address.country;

//Much cleaner way to write lines 63-65
// // const { street, city } = address;
//what if we want to label it differently?
// // const {country: cntry} = address;

//!!-- Spread Operator --!!
// // const first = [1,2,3];
// // const second = [4,5,6];
//Old way to concat
// // const combined = first.concat(second);

//Spread operator way and can easily add within array as shown
// // const spreadCombined = [...first,'a', ...second];

//Lets combine objects
// // const firstO ={name: 'Zachary'};
// // const secondO = {job: 'Junior Developer'};

// // const combinedObjects = {...firstO, ...secondO, location: 'London'};
// // console.log(combinedObjects);

// !!-- Classes --!!
class Person{
    constructor(name){
        this.name = name;
    }
    
    walk() {
        console.log("Walk");
    }
}
const person = new Person('Zachary');
person.walk();