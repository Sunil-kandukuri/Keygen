import fs from 'fs';

// Read JSON report
const jsonData = JSON.parse(fs.readFileSync('report.json', 'utf8'));

// Generate HTML content
let htmlContent = `
  <html>
  <head>
    <title>Playwright Test Report</title>
    <style>
      body { font-family: Arial, sans-serif; }
      .pass { color: green; }
      .fail { color: red; }
    </style>
  </head>
  <body>
    <h1>Test Report</h1>
    <table border="1">
      <tr>
        <th>Test</th>
        <th>Status</th>
      </tr>`;

jsonData.suites.forEach(suite => {
  suite.specs.forEach(spec => {
    let statusClass = spec.tests[0].status === 'passed' ? 'pass' : 'fail';
    htmlContent += `
      <tr>
        <td>${spec.title}</td>
        <td class="${statusClass}">${spec.tests[0].status}</td>
      </tr>`;
  });
});

htmlContent += `
    </table>
  </body>
  </html>`;

// Write to an HTML file
fs.writeFileSync('custom-report.html', htmlContent);
console.log('Custom HTML report generated: custom-report.html');
