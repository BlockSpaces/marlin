import {Add2Application} from './application';
import {ApplicationConfig} from '@loopback/core';

export {Add2Application};

export async function main(options: ApplicationConfig = {}) {
  const app = new Add2Application(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
