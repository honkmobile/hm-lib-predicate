## all(predicate<sub>1</sub>, predicate<sub>2</sub>, ...)(value)

Returns ``true`` if ``value`` satisfies every given predicate
``false`` otherwise

## any(predicate<sub>1</sub>, predicate<sub>2</sub>, ...)(value)

Returns ``true`` if ``value`` satisfies at least one
given predicate, false otherwise

## contains(value)(collection)

Returns ``true`` if ``value`` is an element of ``collection``,
false otherwise

## each(predicate)(collection)

Returns ``true`` if every element of ``collection`` satisfies
``predicate``, ``false`` otherwise

## equals(value)(candidate)

Returns ``true`` if ``value`` is equivalent (but not necessarily identical) to ``candidate``,
``false`` otherwise

## hasProperty(property)(obj)

Returns ``true`` if the ``property`` key exists on the ``obj`` object, ``false`` otherwise

## is(value)(candidate)

Returns ``true`` if ``value`` is identical to ``candidate``, ``false`` otherwise
