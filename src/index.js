export default (f) => {
  const curry = a => b => (b === undefined ? a : curry(f(a, b)));
  return curry;
};
