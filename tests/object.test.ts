import { expect, test } from 'vitest';

test('should fail', () => {
  expect({ name: 'testing' }).toEqual({ name: 'testing' });
});
