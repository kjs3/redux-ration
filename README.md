# Redux Ration

### Step 1
##### Getting package.json and webpack-dev-server up and running with hot-module-replacement

* setup package.json with general project info
* saved some initial modules to package.json
* created `index.js`, `index.scss`, and `index.html` as entry points to the app
* created a basic 	`webpack.config.js` that will bundle files to `/dist/`
* added `start`, `test`, and `test:watch` scripts to package.json
* created simple, single-component React app in index.js

##### Install
Run `npm install` to get all the needed modules installed
NOTE: At of this writing webpack-dev-server doesn't work with Node.js 4.0.0 so I'm running on io.js 2.5.0. This will probably be resolved by the time you read this.

##### Run
The project dev server can be started with `npm start`.
