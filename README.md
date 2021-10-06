# ecologi_assignment

## initial Setup
- make sure you have up-to-date node running on machine.
- clone the [github](https://github.com/K3ithHack3tt/ecologi_assignments) repo

## Get Blog running on LocalHost
- cd to the blog-starter-app/ folder (ecologi_assignment/blog-starter-app)
- `npm ci` to get node modules and dependancies for the nextJS app
- `npm run dev`
- The blog should now be running on http://localhost:3000/

## Get Cypress tests running
- cd to the projects home directory 'ecologi_assignment'
- `npm ci` to get node modules and dependancies for tests
- `npx cypress open` to open the test runner and prove everything has worked fine.

## Running the tests
The tests are situated in the ecologi_assignment/cypress/integration/ecologi_tests folder.
They can be run in the following 2 ways..

#### Cypress test runner
- run `npx cypress open`
- navigate to the ecologi_tests folder
- press play on both the specs to see them run in the browser

#### Headless
1. run `npx cypress run --spec "cypress/integration/ecologi_tests/*"` from the command line in the ecologi_assignment folder. 
This will start running the tests headlessly in electron browser.

