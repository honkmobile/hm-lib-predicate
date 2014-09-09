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

The ``hm.lib.predicate`` module exports a single service,
``hm.lib.predicate.Predicate``, which provides a collection
of predicate-generator functions. These functions can be
very useful when used with functional JavaScript utilities
provided by libraries like Underscore or Lo-Dash (or the
ones baked into ES5+):

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

// inject the hm.lib.predicate.Predicate service
// into your controller/service/etc to get access
// to the predicate functions it exports
widgetFactory.$inject = ['hm.lib.predicate.Predicate'];

angular.module('your.app').factory('your.app.YourService', yourService);
```

Contributing
------------
