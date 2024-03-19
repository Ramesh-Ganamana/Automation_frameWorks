const { test, expect } = require("@playwright/test");

import{faker} from '@faker-js/faker';
 const {DateTime}= require('luxon');

test("should be able to create Dynamic booking", async ({ request }) => {

const firstname  =faker.person.firstName();
const lastname   =faker.person.lastName();
const totalprice =faker.number.int(111);
const checkin    =DateTime.local().toFormat('yyyy-MM-dd');
const checkout   =DateTime.local().plus({day:5}).toFormat('yyyy-MM-dd')
  const response =await request.post(
    `/booking`,
    {

      data: {
        firstname:firstname,
        lastname:lastname,
        totalprice: totalprice,
        depositpaid: true,
        bookingdates: {
          checkin: checkin,
          checkout: checkout,
        },
        additionalneeds: "Breakfast",
      },
    }
  );
  console.log(await response.json());
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.booking).toHaveProperty("firstname",firstname);
  expect(responseBody.booking).toHaveProperty("lastname",lastname);
  expect(responseBody.booking).toHaveProperty("totalprice",  totalprice);
  expect(responseBody.booking).toHaveProperty("depositpaid", true);
});

