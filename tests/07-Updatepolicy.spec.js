// Author : Sunil Kandukuri
// Test script details: updating details for existing policy

const fs = require('fs');

// Read the JSON file synchronously
const data = fs.readFileSync('./Testdata.json', 'utf-8');
const testData = JSON.parse(data);
const { test, expect } = require('@playwright/test');
//const testData = require('./Testdata1.json'); // Import test data

// Define the API URL and authentication token
const apiUrl = testData.retrievepolicyurl;
const policyid = testData.polid;
const updatepolicyname = testData.updatepolname
const authToken = 'your-authentication-token-here';

test('Test updating a policy with token authentication', async ({ request }) => {
  // Send the POST request with the token and payload
  const response = await request.put(apiUrl+policyid, {
    headers: {
      'Authorization': testData.TOKEN1, // Add the Authorization header
           
            'Content-Type': 'application/json' // Specify the content type
    },
    data: 
    {
        "data": {
            "type": "policies",
            "attributes": {
                "name": updatepolicyname,
                "maxMachines": 2,
                "floating": true
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
    expect(responseBody.data.type).toBe('policies');
    expect(responseBody).toHaveProperty('data.attributes.name');
    expect(responseBody.data.attributes.name).toBe(updatepolicyname);
    
            
        
        })
    //)
//})

