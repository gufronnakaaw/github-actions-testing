import fastify from 'fastify';

const server = fastify();

server.get('/', () => {
  return {
    message: 'hello world!',
  };
});

server.get('/cd', () => {
  return {
    message: 'hello CD!',
  };
});

export default server;
