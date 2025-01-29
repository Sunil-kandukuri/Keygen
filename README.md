##  Test Data
Test data maintaing in Testdata.json file. 

## Reporting & Observations
1. Used assertions for validation
2. Test execution results are captured in html format.
3. Logs and reports are available in the test-results/ directory after execution.

## Running the Tests 
1. To run the command for execution for all testscripts npx playwright test
2. To run the command for execution for specific testscripts npx playwright test {script file name}
3. To see the html reports npx playwright show-report

## config file
1. Based on requirement test scripts needs to be run in sequence. So disabled parallel execution.