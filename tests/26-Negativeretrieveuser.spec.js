// Author : Sunil Kandukuri
// Test script details: Retrieving details for newly created user

const fs = require('fs');

// Read the JSON file synchronously
const data = fs.readFileSync('./Testdata.json', 'utf-8');
const testData = JSON.parse(data);
const { test, expect } = require('@playwright/test');

// Define the API URL and authentication token
const apiUrl = testData.retrieveuserurl;
const usersid = testData.userid
  console.log (apiUrl)
 console.log (usersid)

const authToken = 'your-authentication-token-here';

test('Test retrieve user with token authentication', async ({ request }) => {
  // Send the POST request with the token and payload
  const response = await request.get(apiUrl+usersid, {
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
expect(responseBody.data.type).toBe('users');
expect(responseBody).toHaveProperty('data.id');
expect(responseBody.data.id).toBe(usersid);
expect(responseBody).toHaveProperty('data.attributes.status');
expect(responseBody.data.attributes.status).toBe('ACTIVE');
   
          
        
        })
    //)
//})

