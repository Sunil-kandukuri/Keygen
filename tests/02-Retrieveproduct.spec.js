
// Author : Sunil Kandukuri
// Test script details: Retrieving details for newly created product

const fs = require('fs');

 const data = fs.readFileSync('./Testdata.json', 'utf-8');
 const testData = JSON.parse(data);
    const { test, expect } = require('@playwright/test');


// Define the API URL and authentication token
const apiUrl = testData.retrieveproducturl;
const productid = testData.prodid
const productname = testData.prodname;
  console.log (apiUrl)
 console.log (productid)
const authToken = 'your-authentication-token-here';

test('Test retreive a product with token authentication', async ({ request }) => {
  // Send the POST request with the token and payload
  const response = await request.get(apiUrl+productid, {
    headers: {
      'Authorization': testData.TOKEN1, // Add the Authorization header
           
            'Content-Type': 'application/json' // Specify the content type
    },
    
    
  });

  // Validate the status code is 200 ok
  expect(response.status()).toBe(200);

  // Parse the response body
  const responseBody = await response.json();

  console.log('Response Body:', responseBody);

  expect(responseBody).toHaveProperty('data.type');
  expect(responseBody.data.type).toBe('products');
  expect(responseBody).toHaveProperty('data.id');
  expect(responseBody.data.id).toBe(productid);
  expect(responseBody).toHaveProperty('data.attributes.name')
  expect(responseBody.data.attributes.name).toBe(productname);


              
        
        })
    //)
//})

