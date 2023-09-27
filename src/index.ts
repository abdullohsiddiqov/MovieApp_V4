import "./main.css";
import { faker } from '@faker-js/faker';
import { Auth } from './services';
import * as l from './logReg';
import * as c from './DOMelms';
import * as i from './main';

async function iniit() {
  const fake = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    name: faker.internet.userName()
  };

  const newUser = await Auth.Register(fake);
  console.log('newUser = ', newUser);

  const token = await Auth.Login({ email: fake.email, password: fake.password });
  console.log('token = ', token);

  const user = await Auth.Me(token);
  console.log('user = ', user);
}

iniit();
// i.iniit();
l.loginBtn();
l.registerBtn();

import { init } from "./main";
import { createGenres } from "./genres";
function initialize() { 
    init();
    createGenres();
}
initialize();