// Author : Sunil Kandukuri
// Test script details: updating details for existing machine

const fs = require('fs');

// Read the JSON file synchronously
const data = fs.readFileSync('./Testdata.json', 'utf-8');
const testData = JSON.parse(data);
const { test, expect } = require('@playwright/test');

// Define the API URL and authentication token
const apiUrl = testData.retrievemachineurl;

const authToken = 'your-authentication-token-here';
const machinesid = testData.machineid;
const updateplatforms = testData.updateplatform;
 
 console.log (apiUrl)
 console.log (machinesid)

test('Test update machine with token authentication', async ({ request }) => {
  // Send the POST request with the token and payload
  const response = await request.put(apiUrl+machinesid, {
    headers: {
      'Authorization': testData.TOKEN1, // Add the Authorization header
           
            'Content-Type': 'application/json' // Specify the content type
    },
    data: 
    {
        "data": {
          "type": "machine",
          "attributes": {
            "platform": "macOSpro"
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
    expect(responseBody.data.type).toBe('machines');
    expect(responseBody).toHaveProperty('data.attributes.platform');
    expect(responseBody.data.attributes.platform).toBe(updateplatforms);
    
            
        
        })
    //)
//})

