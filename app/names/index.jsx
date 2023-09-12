"use client";

export default function names() {
  const names = [
    { firstName: "Ola", LastName: "Nordmann" },
    { firstName: "Miip", LastName: "MiipMiip" },
  ];

  const combinedNames = names.map((person) => {
    return `${person.firstName} ${person.LastName}`;
  });

  console.log(combinedNames);

  return <div>names</div>;
}
