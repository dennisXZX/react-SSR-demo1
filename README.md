## Server-side Rendering React App

Powered by React, Express, EJS

#### Steps
- run `yarn install` to install dependencies
- run `yarn dev` to run the app server
- default port: localhost:8080

#### PM2

PM2 is used for production process management.

- run `yarn pm2 logs` to see the logs

#### Webpack

- run `yarn webpack` to generate a production build

#### Install Babel on the server

Babel is needed on the server side since we are using server side rendering, so the server needs to understand JSX or other ES6 syntax. Babel and its presents are installed as dependencies instead of dev dependencies, this is because our goal is to push the source code onto production server and compile them on the server.

#### Jest

Run `yarn test` to run tests.

Jest is used for unit testing.