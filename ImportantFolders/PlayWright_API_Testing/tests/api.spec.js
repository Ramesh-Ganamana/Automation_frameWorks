const { test, expect } = require("@playwright/test");

// test("Posting post call APi", async ({ request }) => {
//   let response = await request.post("https://reqres.in/api/users", {
//     data: {
//       name: "Ramesh",
//       Role: "Tester",
//     },
//   });
//   expect(response.status()).toBe(201);
//   console.log(await response.json());
//   const Text = await response.text();
//   expect(Text).toContain("Ramesh");
// });

// test("Getting Get call APi", async ({ request }) => {
//   let response = await request.get("https://reqres.in/api/users?page=2");
//   console.log(await response.json());
//   expect(response.status()).toBe(200);
//   const Text = await response.text();
//   expect(Text).toContain("Michael");
// });

// test("PUT request", async ({ request }) => {
//   let response = await request.put("https://reqres.in/api/users/2", {
//     data: {
//       name: "Ramesh",
//       Role: "Engineer",
//     },
//   });
//   expect(response.status()).toBe(200);
//   console.log(await response.json());
//   const Text = await response.text();
//   expect(Text).toContain("Engineer");
// });

// test.only("DELETE Request", async ({ request }) => {
//   let response = await request.delete("https://reqres.in/api/users/2");
//   expect(response.status()).toBe(204);
// });
//zamuda//

test("should be get all the booking details", async ({ request }) => {
  const response = await request.get(
    `https://restful-booker.herokuapp.com/booking`
  );
  console.log(await response.json());
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});

test("should be able to create a booking", async ({ request }) => {
  const response = await request.post(
    `https://restful-booker.herokuapp.com/booking`,
    {
      data: {
        firstname: "Jim",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2023-06-01",
          checkout: "2023-06-15",
        },
        additionalneeds: "Breakfast",
      },
    }
  );
  console.log(await response.json());
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.booking).toHaveProperty("firstname", "Jim");
  expect(responseBody.booking).toHaveProperty("lastname", "Brown");
  expect(responseBody.booking).toHaveProperty("totalprice", 111);
  expect(responseBody.booking).toHaveProperty("depositpaid", true);
});

var token;

test("should be able to update the booking details", async ({ request }) => {
  // Create a Token which will be used in PUT request

  const response = await request.post(
    `https://restful-booker.herokuapp.com/auth`,
    {
      data: {
        username: "admin",
        password: "password123",
      },
    }
  );
  console.log(await response.json());
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  token = responseBody.token;
  console.log("New Token is: " + token);

  // PUT
  const updateRequest = await request.put(
    `https://restful-booker.herokuapp.com/booking/1`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Cookie: `token=${token}`,
      },
      data: {
        firstname: "Jim",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2023-06-01",
          checkout: "2023-06-15",
        },
        additionalneeds: "Breakfast",
      },
    }
  );
  console.log(await updateRequest.json());
  expect(updateRequest.ok()).toBeTruthy();
  expect(updateRequest.status()).toBe(200);
  const updatedResponseBody = await updateRequest.json();
  expect(updatedResponseBody).toHaveProperty("firstname", "Jim");
  expect(updatedResponseBody).toHaveProperty("lastname", "Brown");
  expect(updatedResponseBody).toHaveProperty("totalprice", 111);
  expect(updatedResponseBody).toHaveProperty("depositpaid", true);
});
test("should be able to delete the booking details", async ({ request }) => {
  // Create a Token which will be used in DELETE request

  const response = await request.post(
    `https://restful-booker.herokuapp.com/auth`,
    {
      data: {
        username: "admin",
        password: "password123",
      },
    }
  );
  console.log(await response.json());
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  token = responseBody.token;
  console.log("New Token is: " + token);

  // DELETE

  const deleteRequest = await request.delete(
    `https://restful-booker.herokuapp.com/booking/1`,
    {
      headers: {
        "Content-Type": "application/json",
        Cookie: `token=${token}`,
      },
    }
  );
  expect(deleteRequest.status()).toEqual(201);
  expect(deleteRequest.statusText()).toBe("Created");
});

