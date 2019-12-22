# auto-css-react

Automatically create and import stylesheets for your React components.

## Install

Install auto-css using [`npm`](https://www.npmjs.com/):

```bash
npm install --global auto-css-reac
```

## Usage

```bash
auto-css
```

By default, `auto-css` generates `css` files. You can change the file extension with the `-e` flage:

```bash
auto-css -e scss
```

`auto-css` also has the option to auto-fill React components:

```bash
auto-css -e scss -f
```

would generate the following code: 

```typescriptreact
import React from 'react';
import "./Nav.scss";

const Nav = (): JSX.Element => (
  <div className="nav"></div>
);

export default Nav;
```
