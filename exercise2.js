// Array Exercises
let people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

people.forEach(p => console.log(p));

people.shift();
people.pop();
people.unshift("Matt");
people.push("Your Name");

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") break;
}

let copy = people.slice(2);

people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people.pop();
people.unshift("Matt");
people.splice(2, 1, "Elizabeth", "Artie", "Your Name");

let withBob = people.concat("Bob");


// Object Exercises
let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");
programming["difficulty"] = 7;
delete programming.jokes;
programming.isFun = true;

programming.languages.map((lang, i) => console.log(`${i} - ${lang}`));
