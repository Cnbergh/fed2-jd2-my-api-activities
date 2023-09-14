"use client"

import { faker } from "@faker-js/faker";

faker.seed(1);

const makeProfile = () => {
    return {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
    };
}

const makeProfiles = () => {
    return faker.helpers.multiple(makeProfile, { count: 10 })
}

const profiles = makeProfiles();

export default function PeopleList() {
    return <div><h2 className="text-xl underline mb-3">List of people</h2>
        {profiles.map((profile) => {
            return (
                <div className="w-full m-1 p-2 border" key={profile.id}>
                    {profile.firstName}</div>
            );
        })}
    </div>
}