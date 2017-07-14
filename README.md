![My Narcissistic Corner](/public/logo.png?raw=true)

[![forthebadge](http://forthebadge.com/images/badges/designed-in-ms-paint.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/check-it-out.svg)](http://forthebadge.com)

A small responsive portfolio website made for my egocentric self. Powered by React, React-Snapshot, and Styled-Components. It should serve as a central hub for my personal projects, and contact information. The site is live at: [https://anthonyascencio.me](https://anthonyascencio.me)

The site is prerendered (snapshotted) to serve usable markup and work even without Javascript. Content is static, but the site is already structured to make the move to data-driven feel almost plug & play. Feel free to shamelessly copy all you need.

## Table of Contents
- [Technologies](#technologies)
- [Screenshot](#screenshot)
- [Prerequisites](#prerequisites)
- [Scripts](#scripts)
- [License](#license)

## Technologies
<div id='technologies'/>

* [React] allow us to code in components, which forces us towards code reusability and design consistency.
* [Styled-Components] and [Native CSS Variables] gives us local scoped css, easy theming, conditional styling, and all the power of a **CSS-in-JS** solution.
* [React-Snapshot] prerenders all markup at build time, and gives us a completely frictionless server side rendering experience.
* The new **Flexbox** and **Grid** standards provide a fully responsive and solid layout system.
* CSS3 **Transitions** and **Animations** help us add a touch of interactivity and playfulness.
* [Firebase] Hosting gives us a decent SPA hosting solution, Storage serves as a CDN for all our assets

## Screenshot
<div id='screenshot'/>

![Screenshot](/public/screenshot.png?raw=true)


## Prerequisites
<div id='prerequisites'/>

* [Node] >= 6.x.x must be installed.
* [Yarn] >= 0.20.x must be installed.
* [Firebase] empty database on the free tier.

To setup optional environment variables, either add them to .env, or create a .env.local file in the root folder of the project (recommended).
```
# Github Repo, used in fork corner
REACT_APP_REPOSITORY
# Sentry url for errors logging in production
REACT_APP_RAVEN_URL
```

## Scripts
<div id='scripts'/>

This project currently uses [create-react-app], look at their incredible documentation if more advanced configuration is needed.
* `$ yarn install` in the app's root directory will install all the necessary dependencies.
* `$ yarn start` will run the app's development server.
* `$ yarn build` creates an optimized production build.
* `$ yarn test` will run Jest in watch mode.
* `$ yarn deploy` will build and deploy to firebase.
* `$ yarn analyse` will show a size visualization of the production bundle.
* `$ yarn format` will run Prettier on the whole codebase.

## License
<div id='license'/>

This project is dedicated to the public domain, with a CC0 license. No attribution is required and no warranties are provided: use as you wish. The libraries used are property of their respective authors.

![cc0 badge](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)

[react]: https://github.com/facebook/react
[react-snapshot]: https://github.com/geelen/react-snapshot
[create-react-app]: https://github.com/facebookincubator/create-react-app
[firebase]: https://firebase.google.com/docs/reference/rest/database/
[styled-components]: https://github.com/styled-components/styled-components/
[Native CSS Variables]: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables
[node]: http://nodejs.org/
[yarn]: http://yarnpkg.com/
