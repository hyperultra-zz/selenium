/**
 * Dependency Modules
 */
var assert = require("assert");
var webdriver = require("selenium-webdriver");
require("geckodriver");
// Application Server
const serverUri = "http://localhost:3000";
// const serverUri = "http://www.google.com";
const appTitle = "Hello";
/**
 * Config for Chrome browser
 * @type {webdriver}
 */
// var browser = new webdriver.Builder()
//  .usingServer()
//  .withCapabilities({ browserName: "chrome" })
//  .build();


let username = 'pgobin';
let accessKey = '2887ebb8-f09b-428f-9b3f-5c01132e0e27';

 var browser  = new webdriver.Builder()
  .usingServer()
  .withCapabilities({
    browserName: "chrome",
    username: username,
    accessKey: accessKey,
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    build: process.env.TRAVIS_BUILD_NUMBER
    })
  .usingServer("http://" + username + ":" + accessKey + "@ondemand.saucelabs.com:80/wd/hub")
  .build();
/**
 * Config for Firefox browser (Comment Chrome config when you intent to test in Firefox)
 * @type {webdriver}
 */
/*
var browser = new webdriver.Builder()
 .usingServer()
 .withCapabilities({ browserName: "firefox" })
 .build();
 */
/**
 * Function to get the title and resolve it it promise.
 * @return {[type]} [description]
 */
function logTitle() {
 return new Promise((resolve, reject) => {
  browser.getTitle().then(function(title) {
   resolve(title);
  });
 });
}
/**
 * Sample test case
 * To check whether the given value is present in array.
 */
describe("Array", function() {
 describe("#indexOf()", function() {
  it("should return -1 when the value is not present", function() {
   assert.equal([1, 2, 3].indexOf(4), -1);
  });
 });
});
describe("Home Page", function() {
 /**
  * Test case to load our application and check the title.
  */
 it("Should load the home page and get title", function() {
  return new Promise((resolve, reject) => {
   browser
    .get(serverUri)
    .then(logTitle)
    .then(title => {
      console.log('FOO');
      assert.strictEqual(title, appTitle);
      resolve();
    })
    .catch(err => reject(err));
  });
 });
/**
  * Test case to check whether the given element is loaded.
  */
//  it("Should check whether the given element is loaded", function() {
//   return new Promise((resolve, reject) => {
//    browser
//     .findElement({ id: "sel-button" })
//     .then(elem => resolve())
//     .catch(err => reject(err));
//   });
//  });
/**
  * End of test cases use.
  * Closing the browser and exit.
  */
 after(function() {
  // End of test use this.
  browser.quit();
 });
});