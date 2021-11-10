const cache = new Map();

export const pow = (base, exp) => {
  const key = `${base}_${exp}`;
  if (cache.has(key)) return cache.get(key);
  const value = base ** exp;
  cache.set(key, value);
  return value;
};

export const sum = (...args) =>
  args.reduce((res, args) => res + args, 0);

export const mult = (a, b) => a * b;
