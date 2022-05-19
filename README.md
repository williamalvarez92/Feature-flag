# FEATURE FLAG TEST

This repo is a test that showcases a feature flag API deployment with dammy data in the `db` folder.

The goal for the test is to create an endpoint in which, depending on the conditions stated in the `features.json`, a user can see some features and not others.

## Assumptions
I do assume the following:
- There is no need for an HTML ROM (no need for an interactive HTML page).
- There is no need to use ES6 (import... from..., using require() is enough).
- The API will generate a random user from the DB and will show the user the features that can use.
- There is no need for a database.
- There is no need for environment variables.

## How to run it

First, clone the repo.

Once cloned, please install the node modules.

`npm install`

For testing please write

`npm run test`

For running the server please write

`npm run serve`

Once the server is running you should be able to check the main page at your <a href='http://localhost:3000'>localhost:3000</a>

To check the API endpoint you can either click the button on the main page `/` or check the `/result` endpoint directly.

You should be able to obtain JSON similar to this:
```
{
  "user": [
    {
      "email": "mike@example.com",
      "location": "GB"
    }
  ],
  "featuresToogle": [
    "SuperCoolFeature"
  ]
}
```
The user is selected randomly and the features that are shown to that user depending on the criteria. You can check another user by refreshing the page.

## Things to improve
1) Testing: I only managed to make one test, which checks if the server is running. I just need a little more time for that.
2) Using schemas and applying them to the DB given: This requires more time.
3) Using a database
4) Add a controller and create more folders for each function.
5) Make a test environment.

## Thought process
I started by doing some research on google about feature flags/toggles. After that, I just started creating a server with node and also made a test. Then, gather the DB information so that I can check how to showcase the best of the data in an API endpoint.

At first, I wanted to use more HTML and make it dynamic, pretending that you can choose a user at the main page `/`. But that is time-consuming and the goal is an API more than an HTML page.

Then I came about how to loop for each of the criteria and user so that I can allocate the features, at first I wanted to use all inside the startserver, but then I realised that it would be wiser to just write functions outside the server so that I can call them.

Finally, I created the functions. And tested on the browser. There are many things left, especially the testing. But I hope this gives a grasp on what I can do with node.js