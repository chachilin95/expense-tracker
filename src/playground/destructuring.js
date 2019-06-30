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