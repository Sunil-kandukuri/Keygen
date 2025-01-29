// Author : Sunil Kandukuri
// Test script details: updating details for existing license

const fs = require('fs');

// Read the JSON file synchronously
const data = fs.readFileSync('./Testdata.json', 'utf-8');
const testData = JSON.parse(data);
const { test, expect } = require('@playwright/test');

// Define the API URL and authentication token
const apiUrl = testData.retrievelicenseurl;
const licensesid = testData.licenseid;
const maxmachines = testData.maxmachine
console.log (apiUrl)
console.log (licensesid)
const authToken = 'your-authentication-token-here';

test('Test updating license with token authentication', async ({ request }) => {
  // Send the POST request with the token and payload
  const response = await request.put(apiUrl+licensesid, {
    headers: {
      'Authorization': testData.TOKEN1, // Add the Authorization header
           
            'Content-Type': 'application/json' // Specify the content type
    },
    data: 
    {
        "data": {
          "type": "licenses",
          "attributes": {
            "maxMachines": maxmachines
          }
        }
      }
    
  });

  // Validate the status code is 200 ok
  expect(response.status()).toBe(200);

  // Parse the response body
  const responseBody = await response.json();

  console.log('Response Body:', responseBody);


    // Perform specific assertions on the response body
    expect(responseBody).toHaveProperty('data.type');
    expect(responseBody.data.type).toBe('licenses');
    expect(responseBody).toHaveProperty('data.attributes.maxMachines');
    expect(responseBody.data.attributes.maxMachines).toBe(maxmachines);
    
            
        
        })
    //)
//})

