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
