README
======

[![Build Status](https://travis-ci.org/honkmobile/hm-lib-predicate.svg?branch=master)](https://travis-ci.org/honkmobile/hm-lib-predicate)

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

### Filtering

The ``hm.lib.predicate`` module exports a single service,
``hm.lib.predicate.Predicate``, which provides a collection
of predicate-generator functions. These functions can be
very useful for searching collections for values satisfying
some particular criteria. This is especilly easy when used
certain utilities/helpers provided by libraries like
Underscore or Lo-Dash:

```javascript
function yourService(p) {
  return {
    /**
     * Return all widgets where widget.status == 'CONFIRMED'
     */
    getConfirmedWidgets: function (widgets) {
      return _.filter(widgets, _.compose(p.equals('CONFIRMED'), _.property('status')));
    },

    /**
     * Get all valid widgets (name is a 3+ character string, colour is either red or blue)
     */
    getValidWidgets: function (widgets) {
      var nameIsValid   = _.compose(p.and(_.isString, p.isLongEnough(3)), _.property('name')),
          colourIsValid = _.compose(p.isOneOf(['red', 'blue']), _.property('colour')),
          widgetIsValid = p.and(nameIsValid, colourIsValid);

      return widgets.filter(widgetIsValid);
    },
  };
}

angular.module('your.app').factory('your.app.YourService', [
  'hm.lib.predicate.Predicate',
  yourService
]);
```

Contributing
------------

License
-------

[MIT](LICENSE)
