import { test, expect } from "@playwright/test";
import { request } from "http";

let userId;

test("should return users", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=2");
  const data = await response.json();
  console.log(data);
  expect(response.status()).toBe(200);
});

test("should create a user", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      name: "John Doe",
      job: "Automation Engineer",
    },
    headers: {
      Accept: "application/json",
      "x-api-key": "reqres-free-v1",
    },
  });
  const data = await response.json();
  userId = data.userId;
  console.log(data);
  expect(data.name).toEqual("John Doe");
  expect(response.status()).toBe(201);
});

test("should update a user", async ({ request }) => {
  const response = await request.put(`https://reqres.in/api/users/${userId}`, {
    data: {
      name: "Jane Doe",
      job: "QA Engineer",
    },
    headers: {
      Accept: "application/json",
      "x-api-key": "reqres-free-v1",
    },
  });
  const data = await response.json();
  console.log(data.id);
  console.log(data);
  expect(data.name).toEqual("Jane Doe");
  expect(response.status()).toBe(200);
});

test("should delete a user", async ({ request }) => {
  const response = await request.delete(
    `https://reqres.in/api/users/${userId}`,
    {
      headers: {
        Accept: "application/json",
        "x-api-key": "reqres-free-v1",
      },
    }
  );
  expect(response.status()).toBe(204);
});
