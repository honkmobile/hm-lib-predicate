README
======

[![Build Status](https://travis-ci.org/honkmobile/hm-lib-predicate.svg?branch=master)](https://travis-ci.org/honkmobile/hm-lib-predicate)
[![Coverage Status](https://img.shields.io/coveralls/honkmobile/hm-lib-predicate.svg)](https://coveralls.io/r/honkmobile/hm-lib-predicate?branch=master)

hm-lib-predicate is an AnguarJS module, ``hm.lib.predicate``, that ships
with a single service, ``hm.lib.predicate.Predicate``, which exports a
collection of configurable boolean predicates.

Predicates are especially useful for finding those elements of a data set
satisfying some criteria, and for performing validation on objects, values,
and collections thereof.

Installation
------------

Follow these three steps to get started with hm-lib-predicate:

First, navigate to your project's home directory and use bower
to install the package, like so:

```bash
~ cd $PROJECT_HOME
~ bower install hm-lib-predicate
```
Second, load the source in your web page html with a ``script``
tag, like so:

```html
<script src="/bower_components/hm-lib-predicate/dist/predicate.js"></script>
```

Third, list the ``hm.lib.predicate`` module in your Angular app's
dependencies, like so:

```javascript
angular.module('your.app', ['hm.lib.predicate']);
```

API
---

[API](docs.md)

Usage
-----

```javascript
function yourService(p) {
  var equals100 = p.equals(100);

  equals100(100); // true
  equals100(99); // false

  var isRedOrBlue = p.isOneOf(['red', 'blue']);

  isRedOrBlue('red'); // true
  isRedOrBlue('green'); // false
  isRedOrBlue('blue'); // true

  p.isTrue(true); // true
  p.isTrue(false); // false

  // etc.
}

angular.module('your.app').factory('your.app.YourService', [
  'hm.lib.predicate.Predicate', // inject the Predicate service
  yourService
]);
```

Contributing
------------

License
-------

[MIT](LICENSE)
