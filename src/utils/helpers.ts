import * as math from './math';

export const reverseName = (name: string): string => {
  return name.split('').reverse().join('');
};

export const doAdd = (a: number, b: number) => math.add(a, b);
export const doSubtract = (a: number, b: number) => math.subtract(a, b);
export const doMultiply = (a: number, b: number) => math.multiply(a, b);
export const doDivide = (a: number, b: number) => math.divide(a, b);
