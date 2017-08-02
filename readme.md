# toolscript

> A mini tools of JavaScript

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][cov-image]][cov-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/toolscript.svg?style=flat-square
[npm-url]: https://npmjs.org/package/toolscript
[travis-image]: https://img.shields.io/travis/node-modules/toolscript.svg?style=flat-square
[travis-url]: https://travis-ci.org/node-modules/toolscript
[cov-image]: http://codecov.io/github/node-modules/toolscript/coverage.svg?branch=master
[cov-url]: http://codecov.io/github/node-modules/toolscript?branch=master
[download-image]: https://img.shields.io/npm/dm/toolscript.svg?style=flat-square
[download-url]: https://npmjs.org/package/toolscript

## Install

[![NPM](https://nodei.co/npm/toolscript.png?downloads=true)](https://nodei.co/npm/toolscript/)

```bash
yarn add toolscript --dev
```

or npm

```bash
npm install toolscript --save-dev
```

## Usage

``` JavaScript
import tool from 'toolscript'
tool.echo.error('echo red')
```

## Tool List

- [echo](#echo)
- [detectIE](#detectIE)

### Tools

<table>
    <tr>
        <th>name</th>
        <th>function</th>
        <th>parameters</th>
        <th>description</th>
    </tr>
    <tr id="echo">
        <th>echo</th>
        <th>
          <p>echo.error()</p>
          <p>echo.success()</p>
          <p>echo.warn()</p>
          <p>echo.debug()</p>
          <p>echo.stress()</p>
          <p>echo.log()</p>
          <p>echo.error()</p>
        </th>
        <th>any data</th>
        <th>echo colorful information in console</th>
    </tr>
    <tr>
        <th>detectIE</th>
        <th>detectIE()</th>
        <th><em>init</em> version of IE</th>
        <th>judge IE version</th>
    </tr>
</table>



## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
