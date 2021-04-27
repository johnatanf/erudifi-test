const persons = [
  {
    name: "Bob",
    location: "Jakarta",
    age: 30,
  },
  {
    name: "Tim",
    location: "Manila",
    age: 25,
  },
  {
    name: "Luke",
    location: "Jakarta",
    age: 65,
  },
]

const filterByAge = (objectsArray, min, max) => {
  return objectsArray.filter(obj => {
    return obj.age > min && obj.age < max;
  })
}

const filterByName = (objectsArray, name) => {
  return objectsArray.filter(obj => {
    return obj.name.match(name);
  })
}

const filterByLocation = (objectsArray, location) => {
  return objectsArray.filter(obj => {
    return obj.location.match(location);
  })
}


// test age 
console.log("TEST AGE");
console.log(filterByAge(persons, 35, 70));
console.log(filterByAge(persons, 20, 35));
console.log('\n');

// test name
console.log("TEST NAME");
console.log(filterByName(persons, "Bob"));
console.log('\n');

// test location 
console.log("TEST LOCATION")
console.log(filterByLocation(persons, "Jakarta"));
console.log('\n');