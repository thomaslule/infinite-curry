# infinite-curry

```
npm install infinite-curry
```

## What does it do?

Transform a function with 2 arguments to a function infinitely curryied.

Call the function with no argument to get the final value.

```javascript
import infiniteCurry from 'infinite-curry';

const sum = infiniteCurry((a, b) => a + b);
sum(3)(7)(5)(); // returns 15

const mult = infiniteCurry((a, b) => a * b);
mult(2)(2)(2)(2)(); // returns 16

const reverse = infiniteCurry((a, b) => b + a);
reverse('f')('l')('o')('w')(); // returns "wolf"

// with Array.reduce()
const apply = (f, val) => f(val);
[2, 2, 2].reduce(apply, sum(0))(); // returns 6
[2, 2, 2].reduce(apply, mult(1))(); // returns 8
```

## How?

```javascript
const infiniteCurry = (f) => {
  const curry = a => b => (b === undefined ? a : curry(f(a, b)));
  return curry;
};
```

## Why would I do that?

I have no idea, I think this is mostly useless.
