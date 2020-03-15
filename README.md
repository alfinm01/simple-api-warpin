# Simple API Warpin

API is accessible on [simple-api-warpin.herokuapp.com](https://simple-api-warpin.herokuapp.com).<br />

OpenAPI documentation for this API can be seen here at [swagger](swagger.com).<br />

This project was bootstrapped with [Express Generator](https://expressjs.com/en/starter/generator.html).

## Endpoints List

``` bash
[GET] '/' = Check if API is live
[GET] '/get-all-messages' = Get all previously sent messages
[POST] '/send-message' = Send a new message
[GET] '/real-time' = Open a long-live connection to display real-time message
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