"use client";

export default function Foo() {
  const names = [
    { firstName: "Ola", LastName: "Nordmann" },
    { firstName: "Miip", LastName: "MiipMiip" },
  ];

  const combinedNames = names.map((person) => {
    return `${person.firstName} ${person.LastName}`;
  });

  console.log(combinedNames);

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