import { Faker } from "@faker-js/faker";

function createRandomUser() {
    const sex = faker.person.sexType();
    const firstName = faker.person.firstName(sex);
    const lastName = faker.person.lastName();
    const email = faker.helpers.unique(faker.internet.email, [
        firstName,
        lastName,
    ]);
    return {
        id: faker.datatype.uuid(),
        avatar: faker.image.avatar(),
        birthday: faker.date.birthdate(),
        email,
        firstName,
        lastName,
        sex,
        subscriptionTier: faker.helpers.arrayElement(["free", "basic", "business"]),
    };
}
const user = createRandomUser();
console.log("user", user);
const users = faker.helpers.multiple(createRandomUser, { count: 3 });
console.log("users", users);
export default function PeopleList() {
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="search" placeholder="Search" />
            </form>
            <div>
                <ul>{activeUser.map(({ firstName }) => (<li key={firstName}>{fistName}</li>))}</ul>
            </div>
        </div>
    );
}

