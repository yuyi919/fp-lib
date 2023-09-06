<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/80216211-00ef5280-863e-11ea-81de-59f3a3d4b8e4.png">  
</p>
<p align="center">
    <i></i>
    <br>
    <br>
    <a href="https://github.com/yuyi919/fp-lib/actions">
      <img src="https://github.com/yuyi919/fp-lib/workflows/ci/badge.svg?branch=main">
    </a>
    <a href="https://bundlephobia.com/package/fp-lib">
      <img src="https://img.shields.io/bundlephobia/minzip/fp-lib">
    </a>
    <a href="https://www.npmjs.com/package/fp-lib">
      <img src="https://img.shields.io/npm/dw/fp-lib">
    </a>
    <a href="https://github.com/yuyi919/fp-lib/blob/main/LICENSE">
      <img src="https://img.shields.io/npm/l/fp-lib">
    </a>
</p>
<p align="center">
  <a href="https://github.com/yuyi919/fp-lib">Home</a>
  -
  <a href="https://github.com/yuyi919/fp-lib">Documentation</a>
</p>

# Install / Import

```bash
$ npm install --save fp-lib
```

```typescript
import { myFunction, myObject, MyReactComponent } from "fp-lib";
```

Specific imports, only import what you need:

```typescript
import { myFunction } from "fp-lib/myFunction";
import { myObject } from "fp-lib/myObject";
import MyReactComponent from "fp-lib/MyReactComponent";
```

# Contributing

## Testing your changes in an external app

You have made some changes to the code and you want to test them
in your app before submitting a pull request?

Assuming `you/my-app` have `fp-lib` as a dependency.

```bash
cd ~/github
git clone https://github.com/you/my-app
cd my-app
yarn

cd ~/github
git clone https://github.com/garronej/fp-lib
cd fp-lib
yarn
yarn build
yarn link-in-app my-app
npx tsc -w

# Open another terminal

cd ~/github/my-app
rm -rf node_modules/.cache
yarn start # Or whatever my-app is using for starting the project
```

You don't have to use `~/github` as reference path. Just make sure `my-app` and `fp-lib`
are in the same directory.

> Note for the maintainer: You might run into issues if you do not list all your singleton dependencies in
> `src/link-in-app.js -> singletonDependencies`. A singleton dependency is a dependency that can
> only be present once in an App. Singleton dependencies are usually listed as peerDependencies example `react`, `@emotion/*`.

## Releasing

For releasing a new version on GitHub and NPM you don't need to create a tag.  
Just update the `package.json` version number and push.

For publishing a release candidate update your `package.json` with `1.3.4-rc.0` (`.1`, `.2`, ...).  
It also work if you do it from a branch that have an open PR on main.

> Make sure your have defined the `NPM_TOKEN` repository secret or NPM publishing will fail.
