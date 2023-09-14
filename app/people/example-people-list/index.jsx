"use client"

import { faker } from "@faker-js/faker";
import { useState } from "react";

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

const fakerProfiles = makeProfiles();

export default function PeopleList() {
    const [profiles, setProfiles] = useState(fakerProfiles);
    const [inputSearchValue, setInputSearchValue] = useState("");

    function handleOnSubmit(event) {
        event.preventDefault();
        console.log("submitted form");
        const searchTerm = event.current.Target.elements.search.value;
        console.log("searchTerm", searchTerm);

        setProfiles((prevProfiles) => {
            return prevProfiles.filter((person) => {
                return person.firstName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
            });
        });
    }

    console.warn("inputSearchValue >>>", inputSearchValue);

    /*  const [searchTerm, setSearchTerm] = useState("");
 
     const filteredProfiles = profiles.filter((profile) => profile.firstName.toLowerCase().includes(searchTerm.toLowerCase())) */

    return <div><h2 className="text-xl underline mb-3">List of people</h2>
        <section className="mb-2">
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="search">Search</label>


                <input type="search" id="search" name="search"
                    className="m-1 p-2 w-full" value={inputSearchValue} onChange={(event) => {
                        setInputSearchValue(event.currentTarget.value);

                        setProfiles((prevProfiles) => {
                            return prevProfiles.filter((person) => {
                                return person.firstName.toLocaleLowerCase().includes(inputSearchValue.toLocaleLowerCase())
                            })
                        })
                    }
                    }></input>

                <input type="submit" className="m-1 p-2 border cursor-pointer w-full"></input>
            </form>
        </section>
        {profiles.map(({ id, firstName }) => {
            return (
                <div className="w-full m-1 p-2 border" key={id}>
                    {firstName}</div>
            );
        })}
    </div>
}