import { expect, test } from 'vitest';

test('should fail', () => {
  expect({ name: 'testing' }).toBe({ name: 'wrong' });
});
