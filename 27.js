var person = {
  name: "Shahzaib Kamal",
  eyeColor: "Brown",
  hairColor: "Black",
  age: 27,
  weight: 80,
  nationality: "Pakistani",
  ageStatus: function() {
    if(this.age > 30){
      return this.name + " is above 30";
    } else {
      return (
        this.name + " is under 30 or (" + this.age +" years old) presicely"
      );
    }
  }
}

console.log(
  "The " +
  person.name +
  " has " +
  person.eyeColor +
  "eyes and " +
  person.hairColor +
  " hair"
);

console.log(person.ageStatus());