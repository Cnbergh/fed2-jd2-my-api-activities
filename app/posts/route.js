import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraph(),
    author: faker.person.firstName(),
  };
}

export async function GET(request) {
  const fakerPosts = faker.helpers.multiple(createRandomPost, {
    count: 10,
  });

  return NextResponse.json({ posts: fakerPosts() }, { status: 200 });
}
