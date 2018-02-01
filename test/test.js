import infiniteCurry from '../src';

test('check that the readme doesnt lie', () => {
  const sum = infiniteCurry((a, b) => a + b);
  expect(sum(3)(7)(5)()).toBe(15);

  const mult = infiniteCurry((a, b) => a * b);
  expect(mult(2)(2)(2)(2)()).toBe(16);

  const reverse = infiniteCurry((a, b) => b + a);
  expect(reverse('f')('l')('o')('w')()).toBe('wolf');

  const apply = (f, val) => f(val);
  expect([2, 2, 2].reduce(apply, sum(0))()).toBe(6);
  expect([2, 2, 2].reduce(apply, mult(1))()).toBe(8);
});
