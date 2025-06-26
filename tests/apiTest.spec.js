import { test, expect } from "@playwright/test";

const REQRES_API_BASE_URL =
  process.env.REQRES_API_BASE_URL || "https://reqres.in";

test("should return users", async ({ request }) => {
  const response = await request.get(`${REQRES_API_BASE_URL}/api/users?page=2`);
  const data = await response.json();
  expect(response.status()).toBe(200);
  expect(data.data).toBeInstanceOf(Array);
});

test.describe("User CRUD Operations", () => {
  let userId;

  test.beforeAll(async ({ request }) => {
    const response = await request.post(`${REQRES_API_BASE_URL}/api/users`, {
      data: {
        name: "John Doe",
        job: "Automation Engineer",
      },
      headers: {
        Accept: "application/json",
        "x-api-key": process.env.REQRES_API_KEY,
      },
    });
    expect(response.status()).toBe(201);
    const data = await response.json();
    userId = data.id;
    expect(userId).toBeDefined();
  });

  test("should update the created user", async ({ request }) => {
    const response = await request.put(
      `${REQRES_API_BASE_URL}/api/users/${userId}`,
      {
        data: {
          name: "Jane Doe",
          job: "QA Engineer",
        },
        headers: {
          Accept: "application/json",
          "x-api-key": process.env.REQRES_API_KEY,
        },
      }
    );
    const data = await response.json();
    expect(response.status()).toBe(200);
    expect(data.name).toEqual("Jane Doe");
  });

  test("should delete the created user", async ({ request }) => {
    const response = await request.delete(
      `${REQRES_API_BASE_URL}/api/users/${userId}`,
      {
        headers: {
          Accept: "application/json",
          "x-api-key": process.env.REQRES_API_KEY,
        },
      }
    );
    expect(response.status()).toBe(204);
  });
});
