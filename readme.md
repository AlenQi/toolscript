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
tool.echo.red('echo red')// echo red string
tool.detectIE(9) //if current browser is IE 9 return true else  return false
tool.copy('content') //copy the `content` to clipboard
tool.throttle(Func, 50, 100) //The call that is triggered continuously within a 50ms interval, the latter call will handle the pending processing of the previous call, but at least once every 100ms
```

## Tool List

- [echo](#echo)
- [detectIE](#detectIE)
- [copy](#copy)
- [throttle](#throttle)

### Tools

> <table>
    <tr>
        <th style="color:red">name</th>
        <th>function</th>
        <th>parameters</th>
        <th>description</th>
    </tr>
    <tr id="echo">
        <th>echo</th>
        <th>
          <p>echo.black()</p>
          <p>echo.red()</p>
          <p>echo.green()</p>
          <p>echo.yellow()</p>
          <p>echo.blue()</p>
          <p>echo.carmine()</p>
          <p>echo.cyan()</p>
        </th>
        <th>any data</th>
        <th>echo colorful information in console</th>
    </tr>
    <tr>
        <th>detectIE</th>
        <th>detectIE()</th>
        <th>
          <p><em>int</em></p>
          version of IE
        </th>
        <th>judge IE version</th>
    </tr>
    <tr>
        <th>copy</th>
        <th>copy()</th>
        <th>
          <p><em>string</em></p>
          the content
        </th>
        <th>copy the content to clipboard, it must be called as a direct result of user action.</th>
    </tr>
    <tr>
        <th>throttle</th>
        <th>throttle()</th>
        <th>
          <p>throttle function<em>function</em></p>
          <p>the time that successive calls do not trigger, it's in milliseconds <em>number</em></p>
          <p>the time that at least once, it's in milliseconds <em>number</em></p>
        </th>
        <th>function throttle</th>
    </tr>
</table>



## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
