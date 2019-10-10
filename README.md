# gp-uid

[![Dependencies][prod-dependencies-badge]][prod-dependencies]
[![Coverage][coverage-badge]][coverage]
[![Build Status][travis-badge]][travis-ci]
[![License][license-badge]][LICENSE]
[![PRs Welcome][prs-badge]][prs]

## Description

This repository provides a powerful ground place unique identifier generator.

## Install

```
yarn add @tictactrip/gp-uid
```

## How to use it?

```js
import { Generator } from "@tictactrip/gp-uid";

const generator = new Generator();

const gpuid = generator.gpuid({
        name: 'Paris, Île-de-France, France',
        latitude: 49.00443,
        longitude: 2.51703,
        countryCode: 'fr',
        type: 'cluster',
      });

console.log(gpuid);
```

Output: 

```
[
    {
        id: 'c|FRparis___@u09yc',
        countryCode: 'fr',
        latitude: 49.00443,
        longitude: 2.51703,
        name: 'Paris, Île-de-France, France',
        type: 'cluster'
    }
]
```



## Scripts

Run using yarn run `<script>` command.

    clean       - Remove temporarily folders.
    build       - Compile source files.
    build:watch - Interactive watch mode, compile sources on change.
    lint        - Lint source files.
    lint:fix    - Fix lint source files.
    test        - Runs all tests with coverage.
    test:watch  - Interactive watch mode, runs tests on change.

## License

GPL-3.0 © [Tictactrip](https://www.tictactrip.eu)

[prod-dependencies-badge]: https://david-dm.org/tictactrip/gp-uid/status.svg
[prod-dependencies]: https://david-dm.org/tictactrip/gp-uid
[coverage-badge]: https://codecov.io/gh/tictactrip/gp-uid/branch/master/graph/badge.svg
[coverage]: https://codecov.io/gh/tictactrip/gp-uid
[travis-badge]: https://travis-ci.org/tictactrip/gp-uid.svg?branch=master
[travis-ci]: https://travis-ci.org/tictactrip/gp-uid
[license-badge]: https://img.shields.io/badge/license-GPL3-blue.svg?style=flat-square
[license]: https://github.com/tictactrip/gp-uid/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
