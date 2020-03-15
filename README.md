# Simple API Warpin

API is accessible on [simple-api-warpin.herokuapp.com](https://simple-api-warpin.herokuapp.com).<br />

OpenAPI documentation for this API can be seen here at [Swagger Documentation](https://app.swaggerhub.com/apis-docs/alfinm01/simple-api-warpin/1.0.0).<br />

For the websocket API, it's only accessible locally on <b>ws://localhost:9000</b>. The tool I used for testing the websocket API is [Simple Websocket Client](https://chrome.google.com/webstore/detail/simple-websocket-client/pfdhoblngboilpfeibdedpjgfnlcodoo/related?hl=en) add-on for Chrome.<br />

This project was bootstrapped with [Express Generator](https://expressjs.com/en/starter/generator.html).

## Endpoints List

``` bash
Available in Heroku
[GET] '/' = Check if API is live
[GET] '/message' = Get all previously sent messages
[POST] '/message' = Send a new message

Only available in local deployment (ws://localhost:9000)
[GET] '/' = Open a long-live connection to display real-time message
```

## Available Scripts

In the project directory, you can run:

### `npm install`

Install required dependencies. (Only for first time).

### `npm start`

Runs the app in the development mode.<br />
API will run on [http://localhost:3000](http://localhost:3000).

### `npm run lint`

Checks if there is any warning or wrong in codes lint.

### `npm run lint-fix`

Checks if there is any warning or wrong in codes lint.<br />
And automatically fixes what can be fixed.

## Learn More

You can learn more in the [Express documentation](https://expressjs.com/).