A responsive website made for Rose's Daycare LLC powered by React and CSS Modules.

## Live at
[roses-daycare.firebaseapp.com](https://roses-daycare.firebaseapp.com)

## Technologies
  * React and React-Router
  * CSS Modules and PostCSS-cssnext
  * Layout purely in Flexbox
  * Webpack and Babel via nwb
  * Firebase for a serverless database and hosting

![Screenshot](/public/screenshot.png?raw=true)

## Prerequisites
[Node](http://nodejs.org/) >= 6.x.x must be installed.
<br />
[Yarn](http://yarnpkg.com/) >= 0.20.x must be installed.

## Development
- `$ yarn install` in the app's root directory will install everything needed for development.
- `$ yarn start` will run the app's development server at [http://localhost:3000](http://localhost:3000) with hot module reloading.

## Production
- `$ yarn build` creates a production build by default.
   To create a development build, set the `NODE_ENV` environment variable to `development` while running this command.
- `$ yarn run clean` will delete built resources.

## To Do
  * Gallery flex bug
  * Refactor Home & Contact
  * Github corner
  * PropTypes, DefaultProps

  * Replace react-modal with a custom made modal following react-modal-dialog ideas
