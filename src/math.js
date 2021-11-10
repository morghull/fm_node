export const pow = (base, exp) => {
  return base ** exp;
};

export const sum = (...args) =>
  args.reduce((res, args) => res + args, 0);

export const mult = (a, b) => a * b;

const superSecret = 'Elon Musk';

const ssFunction = () => superSecret;
export default superSecret;
