import * as c from './DOMelms';
import * as s from './services';

export function loginBtn() {
  c.loginBtn.addEventListener('click', () => {
    c.main.style.display = 'none';
    c.login.style.display = 'block';
  });
}

export function registerBtn() {
  c.registerBtn.addEventListener('click', () => {
    c.main.style.display = 'none';
    c.register.style.display = 'block';
  });
}

export async function submit() {
  var user = {
    email: `${c.inpRegEmail.value}`,
    name: `${c.inpRegUserName.value}`,
    password: `${c.inpRegPassword.value}`
  };
  const newUser = await s.Auth.Register(user); // register 3 ta parametr olad ken register bogan user qaytarb berad
  c.register.style.display = 'none';
  c.login.style.display = 'block';
}


const tokenKey = '';
const inpLogEmail: HTMLInputElement = document.querySelector('.logEmail');
const inpLogPassword: HTMLInputElement = document.querySelector('.logPassword');


export async function logIn() {

  const token = await s.Auth.Login({
    email:`${inpLogEmail.value}`,
    password: `${inpLogPassword.value}`
  });

  c.login.style.display = 'none';
  c.navbar.style.display = 'block';
  c.main.style.display = 'block';
  c.logout.style.display = 'block';
  localStorage.setItem(tokenKey, token);
  const user = await s.Auth.Me(token);
  console.log('user : ', user);
  c.loginBtn.innerText = `${user.name}`;
  c.registerBtn.style.display = 'none';
  console.log(tokenKey)

  c.logout.addEventListener('click',() => {
    localStorage.removeItem(tokenKey);
    c.loginBtn.innerText = `Login`;
    c.registerBtn.innerText = 'Register';
    c.registerBtn.style.display = 'block';
    c.logout.style.display = 'none';
    inpLogPassword.value = '';
    inpLogEmail.value = '';
  });
}

c.submit.addEventListener('click', submit);
c.singIn.addEventListener('click', logIn);