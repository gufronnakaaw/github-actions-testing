import { expect, test } from 'vitest';
import hello from '../utils/hello';

test('should return hello people!', () => {
  expect(hello('people!')).toBe('hello people!');
});
