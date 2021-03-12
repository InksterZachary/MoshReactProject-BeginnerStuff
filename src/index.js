const person = {
    name: 'Zachary',
    walk() {
        console.log(this);
    }
};

person.walk();