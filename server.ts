import fastify from 'fastify';

const server = fastify();

server.get('/', () => {
  return {
    message: 'hello world!',
  };
});

export default server;
