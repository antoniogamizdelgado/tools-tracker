import { sum } from './sum';

describe('sum function', () => {
  it('should add two positive numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should add a positive and a negative number correctly', () => {
    expect(sum(5, -3)).toBe(2);
  });

  it('should add two negative numbers correctly', () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  it('should add zero correctly', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
    expect(sum(0, 0)).toBe(0);
  });

  it('should handle decimal numbers', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
