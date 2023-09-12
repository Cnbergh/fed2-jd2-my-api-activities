"use client";

export default function Foo() {
  const names = [
    { firstName: "Ola", LastName: "Nordmann", isStudent: true, goingToMuseum: true },
    { firstName: "Miip", LastName: "MiipMiip", isStudent: false, goingToMuseum: false },
  ];

  const combinedNames = names.map((person) => {
    return `${person.firstName} ${person.LastName}`;
  });

  console.log(combinedNames);

  const students = names.filter((person) => person.isStudent);

  console.warn('students >>>', students);

  const pplGoingToTheMuseum = names
    .filter((person) => person.isStudent)
    .filter((person) => person.goingToMuseum)
    .map((person) => console.warn(`${person.firstName} is going to the Museum`));

  console.warn('pplGoingToTheMuseum >>>', pplGoingToTheMuseum);

  return (
    <div>
      <h2>List of names</h2>
      {combinedNames.map((person) => {
        return <p key={person}>{person}</p>;
      })}
    </div>
  )
}

Foo();