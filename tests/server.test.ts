import { expect, test } from 'vitest';
import server from '../server';

test('should can get data', async () => {
  const response = await server.inject({
    method: 'GET',
    url: '/',
  });

  expect(response.json().message).toBe('hello world!');
});

test('should can get data cd', async () => {
  const response = await server.inject({
    method: 'GET',
    url: '/cd',
  });

  expect(response.json().message).toBe('hello CD!');
});
