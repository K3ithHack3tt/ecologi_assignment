# ecologi_assignment

## initial Setup
- make sure you have up-to-date node running on machine.
- clone the [github](https://github.com/K3ithHack3tt/ecologi_assignment) repo

## Get Blog running on LocalHost
- cd to the blog-starter-app/ folder (ecologi_assignment/blog-starter-app)
- `npm ci` to get node modules and dependancies for the nextJS app
- `npm run dev`
- The blog should now be running on http://localhost:3000/

## Get Cypress tests running
- cd to the projects home directory 'ecologi_assignment' (in a different window so that the localhost keeps running)
- `npm ci` to get node modules and dependancies for tests
- `npx cypress open` to open the test runner and prove everything has worked fine. (this might take a minute on first open)

## Running the tests
The tests are situated in the ecologi_assignment/cypress/integration/ecologi_tests folder. There are 2 files which test the 2 different types of page on the blog, the homepage and the full-form blog page.
They can be run in the following 2 ways..

#### Cypress test runner
- run `npx cypress open`
- navigate to the ecologi_tests folder
- press play on both the specs to see them run in the browser

#### Headless
1. run `npx cypress run --spec "cypress/integration/ecologi_tests/*"` from the command line in the ecologi_assignment folder. 
This will start running the tests headlessly in electron browser.


## Thoughts on the project
- It was a pretty fun challenge to get to work with nextJS for the first time.
- I made some changes to the app itself by adding some useful data-selectors to the elements. This is best practise when working with UI testing and just helps to get to elements easier and not have long css, xpath or other paths to an element. You can see these in the project my tests as the selectors prefixed with `cy-data` .
- I have left my test pretty well commented (massively over-commented really :D ) so you can see some of my tought process behind what I am thinking. I also left some comments on some things I might have done better if I had more time.
