// Author : Sunil Kandukuri
// Test script details: Deleting liecense

const fs = require('fs');

// Read the JSON file synchronously
const data = fs.readFileSync('./Testdata.json', 'utf-8');
const testData = JSON.parse(data);
const { test, expect } = require('@playwright/test');

// Define the API URL and authentication token
const apiUrl = testData.retrievelicenseurl;
const licensesid = testData.licenseid
const authToken = 'your-authentication-token-here';

test('Test deleting license with token authentication', async ({ request }) => {
  // Send the POST request with the token and payload
  const response = await request.delete(apiUrl+licensesid, {
    headers: {
      'Authorization': testData.TOKEN1, // Add the Authorization header
           
            'Content-Type': 'application/json' // Specify the content type
    },
        
  });

  // Validate the status code is 204 No content
  expect(response.status()).toBe(204);

    
            
        
        })
    //)
//})

