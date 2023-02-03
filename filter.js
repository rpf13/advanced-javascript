// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];


const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

// This returns only Paul...it filters based on the name but results the whole array
const paul = people.filter(person => person.name === "Paul");
console.log(paul);

// This will return only return only the first object in the array, the Paul object
const paul_name = people.filter(person => person.name === "Paul")[0];
console.log(paul_name);


  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];


  // all in one function

//   const candidates = students.filter(student => {
//     let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
//     return strongSkills.length > 0;
//   });
//   console.log(candidates);

// simplified in two functions

// const hastStrongSkills = student => {
//     let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
//     return strongSkills.length > 0;
// };

// const candidates = students.filter(hastStrongSkills);
// console.log(candidates);

// putting the callback function externally for easier readablility
// the has5yearsExp is the callback function, we can define it externally
// and then get rid of the return statement

const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
const candidates = students.filter(hasStrongSkills);
console.log(candidates);

// if we just want the name withouth the data, we can use map:
let filteredName = candidates.map(candidate => [candidate.name]);
console.log(filteredName);