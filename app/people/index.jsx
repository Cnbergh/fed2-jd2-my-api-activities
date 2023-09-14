import PeopleList from "../people/example-people-list";

export default function People() {
    return (
        <div className="flex flex-col border p-6 w-full">
            <h1 className="text-3xl mb-3">People</h1>
            <section className="grow">
                <PeopleList></PeopleList>
            </section>
        </div>
    )
}