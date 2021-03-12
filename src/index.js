// -- Objects, this, binding --
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

// -- Arrow functions -- 
// // const square = function number(){
// //     return number * number;
// // }

//0 parameters = () 1 parameter = parameter 2+ parameters = (parameter, parameter)
const square = number => number * number;
console.log(square(5));