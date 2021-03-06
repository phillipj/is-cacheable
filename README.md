# is-cacheable

[![Build Status](https://api.travis-ci.org/phillipj/is-cacheable.png?branch=master)](http://travis-ci.org/phillipj/is-cacheable)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Check whether or not a HTTP response is cacheable based in its headers.

## Usage

```js
var isCacheable = require('is-cacheable')
var request = require('request')

request('http://example.com', function (err, res, body) {
  console.log('Is response cacheable?', isCacheable(res.headers))
})
```

## Contributing

is-cacheable is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [contribution guide](CONTRIBUTING.md) for more details.

## Contributors

<table><tbody>
<tr><th align="left">Phillip Johnsen</th><td><a href="https://github.com/phillipj">GitHub/phillipj</a></td><td><a href="http://twitter.com/phillipjohnsen">Twitter/@phillipjohnsen</a></td></tr>
</tbody></table>

## Credits

Got lots of inspiration from https://github.com/kevinswiber/request-caching

## License

Copyright &copy; 2015 **is-cacheable** contributors.

**is-cacheable** is licensed under the MIT license. All rights not explicitly granted in the MIT license are reserved. See the included `LICENSE.md` file for more details.


