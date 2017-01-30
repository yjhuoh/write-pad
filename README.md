
# write-pad

Helper function for right padding a string.

[![build status](https://circleci.com/gh/yjhuoh/right-pad.svg?style=shield&circle-token=6615a20dff4ae2cd86e423115553bff076ca07d0)](https://circleci.com/gh/yjhuoh/right-pad)
[![downloads](https://img.shields.io/npm/dm/right-pad.svg)](https://www.npmjs.org/package/right-pad)

## Installation

```bash
$ npm install write-pad
```

Then bundle for the browser with
[browserify](https://github.com/substack/browserify).

## Usage

```
writepad = require('write-pad')

writepad('foo', 5)
// => "foo  "

writepad('foobar', 6)
// => "foobar"

writepad(1, 2, 0)
// => "10"
```

## License

(MIT)

Copyright (c) 2016 Yu-Jay Huoh

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
