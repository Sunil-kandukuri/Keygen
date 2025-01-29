// Author : Sunil Kandukuri
// Test script details: Retrieving details for all products


const fs = require('fs');

// Read the JSON file synchronously
const data = fs.readFileSync('./Testdata.json', 'utf-8');
const testData = JSON.parse(data);
const { test, expect } = require('@playwright/test');


// Define the API URL and authentication token
const apiUrl = testData.getallproductsurl;
const updateproductname = testData.updateprodname;
const authToken = 'your-authentication-token-here';

test('Test get all products with token authentication', async ({ request }) => {
  // Send the POST request with the token and payload
  const response = await request.get(apiUrl, {
    headers: {
      'Authorization': testData.TOKEN1, // Add the Authorization header
           
            'Content-Type': 'application/json' // Specify the content type
    },
    
    
  });

  // Validate the status code is 200 ok
  expect(response.status()).toBe(200);

  // Parse the response body
  const responseBody = await response.json();

  const firstProduct = responseBody.data[0];
  console.log('Response Body:', responseBody);
  expect(firstProduct).toHaveProperty('type', 'products');
  expect(firstProduct).toHaveProperty('attributes');
  expect(firstProduct.attributes).toHaveProperty('name', updateproductname);
  expect(firstProduct.attributes).toHaveProperty('distributionStrategy', 'LICENSED');

           
        
        })
    //)
//})

