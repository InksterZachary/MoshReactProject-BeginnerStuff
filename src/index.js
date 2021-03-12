const person = {
    name: 'Zachary',
    walk() {
        console.log(this);
    }
};
//calls function from object
person.walk();
//sets walk to person function
const walk = person.walk;
//strict mode enabled by default so this will return undefine. It does not reference the window object
walk();