
// Author : Sunil Kandukuri
// Test script details: Creating a new product

const fs = require('fs');      
    // Read and parse Testdata.json
    const data = fs.readFileSync('./Testdata.json', 'utf-8');
    const testData = JSON.parse(data);
    
const { test, expect } = require('@playwright/test');

// Define the API URL and authentication token
const apiUrl = testData.createproducturl;
const productname = testData.prodname;
const authToken = 'your-authentication-token-here';

test('Test adding a new product with token authentication', async ({ request }) => {
  // Send the POST request with the token and payload
  const response = await request.post(apiUrl, {
    headers: {
      'Authorization': testData.TOKEN1, // Add the Authorization header
           
            'Content-Type': 'application/json' // Specify the content type
    },
    data: 
    {
        "data": {
          "type": "product",
          "attributes": {
            "name": productname
          }
        }
      }
    
  });

  // Validate the status code is 201 created
  expect(response.status()).toBe(201);

  // Parse the response body
  const responseBody = await response.json();

  //console.log('Response Body:', responseBody);


    // Perform specific assertions on the response body
    expect(responseBody).toHaveProperty('data.type');
    expect(responseBody.data.type).toBe('products');
    expect(responseBody).toHaveProperty('data.attributes.name');
    expect(responseBody.data.attributes.name).toBe(productname);
    const idValue = responseBody.data.id
    const jsonData = {
      prodid: idValue
  };

  fs.writeFileSync('./Outputdata.json', JSON.stringify(jsonData, null, 2), 'utf8');

  console.log('ID saved to ./Outputdata.json:', jsonData);

  const outputData = fs.readFileSync('./Outputdata.json', 'utf-8');
    const outputJson = JSON.parse(outputData);

const Testdata1 = fs.existsSync('./Testdata.json')
        ? JSON.parse(fs.readFileSync('./Testdata.json', 'utf-8'))
        : {};

    // Merge or add the data from Outputdata.json to Testdata.json
    const updatedTestData = {
        ...Testdata1, // Keep existing Testdata.json content
        ...outputJson // Add/overwrite data from Outputdata.json
    };

    // Write the updated data back to Testdata.json
    fs.writeFileSync('./Testdata.json', JSON.stringify(updatedTestData, null, 2), 'utf-8');


               
        
        })
    //)
//})

