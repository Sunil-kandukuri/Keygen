// Author : Sunil Kandukuri
// Test script details: Retrieving details for newly created license

const fs = require('fs');

// Read the JSON file synchronously
const data = fs.readFileSync('./Testdata.json', 'utf-8');
const testData = JSON.parse(data);
const { test, expect } = require('@playwright/test');


// Define the API URL and authentication token
const apiUrl = testData.retrievelicenseurl;
const licensesid = testData.licenseid
console.log (apiUrl)
console.log (licensesid)
const authToken = 'your-authentication-token-here';

test('Test retrieve license with token authentication', async ({ request }) => {
  // Send the POST request with the token and payload
  const response = await request.get(apiUrl+licensesid, {
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


    // Perform specific assertions on the response body
    expect(responseBody).toHaveProperty('data.type');
    expect(responseBody.data.type).toBe('licenses');
    expect(responseBody).toHaveProperty('data.id');
    expect(responseBody.data.id).toBe(licensesid);
    expect(responseBody).toHaveProperty('data.attributes.status');
    expect(responseBody.data.attributes.status).toBe('ACTIVE');

            
        
        })
    //)
//})

