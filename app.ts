import server from './server';

async function main() {
  try {
    await server.listen({ port: 5000 });
  } catch (error) {
    console.log(error);
  }
}

main();
