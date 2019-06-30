// ==========================================================================
// ==========================================================================
// Object Destructuring

const person = {
    name: 'Alejandro',
    age: 24,
    location: {
        city: 'Dallas',
        temp: 100
    }
}

// name = 'Anonymous' sets a default string
const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}`);

// temp: temperature allows you to rename the local variable
const { city, temp: temperature } = person.location;
console.log(`He lives in ${city} where it is ${temperature} degrees`);

// == CHALLENGE == //

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);

// ==========================================================================
// ==========================================================================
// Array Destructuring

const address = ['1234 Dude Road', 'MyTown', 'MyState', '12345'];
const [, town = 'Dallas', state = 'Texas', ] = address;

console.log(`You are in ${town}, ${state}`);

// == CHALLENGE == //

const item = ['coffee', '$2', '$2.50', '$2.75'];
const [thing, , medium, ] = item;

console.log(`A medium ${thing} costs ${medium}`);