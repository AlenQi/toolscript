# A mini tools of JavaScript


## Install

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
        <th>echo.error();echo.success();echo.warn();echo.debug();echo.stress();echo.log()</th>
        <th>any data</th>
        <th>echo colorful information in console</th>
    </tr>
    <tr>
        <th>detectIE</th>
        <th>detectIE()</th>
        <th>empty</th>
        <th>judge IE version</th>
    </tr>
</table>



## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
