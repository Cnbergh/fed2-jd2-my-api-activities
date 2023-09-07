import { NextResponse } from "next/server";

const topics = new Set();

topics.add("cars");
topics.add("bolas");
topics.add("music");

const otherTopics = ["cars", "bolas", "music"];

// console.log("fooSet size, 1st Time >>>", fooSet.size);

// console.log("Is there a music topic:", fooSet.has("music"));

// fooSet.delete("music");

// console.log("Is there a music topic:", fooSet.has("music"));

export async function GET(request) {
  let searchTopic = request.nextUrl.searchParams.get("topic");

  const topicExists = topics.has(searchTopic);

  let message = "";

  if (topicExists) {
    message = "Topic exists";
  } else {
    message = "No Dice. ${searchTopic} Topic does not exist";
  }

  return NextResponse.json({ data: message });
}
export async function POST(request) {
  let res = await request.json();
  console.log("request >>>", res.topic);
  "request >>>" | "education";
  topics.add(res.topic);
  console.log("topics >>>", topics);
  "topics >>>" | Set;
  {
    0;
    "cars", 1;
    "bolas", 2;
    "music", 3;
    ("education");
  }
  return NextResponse.json({ message: "something happened" });
}

export async function DELETE(request) {
  let res = await request.json();
  console.log("request >>>", res.topic);
  "request >>>" | "music";
  topics.delete(res.topic);
  console.log("topics >>>", topics);

  return NextResponse.json({ message: "Delete the topic" });
}
