# Redux Ration

### Step 2

##### Moving some files around

* moved application files into `src/` directory
* `index.html` is now in `src/` directory
* `index.scss` is now in `src/styles` directory
* moved `App` React class out of `index.js` and into a `src/components/app.jsx` module
* changed from es6 `class` syntax to `React.createClass` which allows mixins and binds `this` to methods

##### Setting up the basic structure of the page
* the root HTML node of the app is a `main` tag
* it includes a header, `search-form` section and a `search-results` section
* added `normalize.css` module as `package.json` dependency and imported from within `index.scss`
* added some basic styling

##### Updated Webpack 

* added `context` so webpack looks in `src/` for files
* changed `--content-base` in `npm start` script to point to `src` directory
  * this was need for `src/index.html` to get picked up by webpack-dev-server
* changed publicPath to just `/`
* added HtmlWebpackPlugin which outputs html into `dist/`


I think we're ready to finally get into react/redux.
