import * as c from './DOMelms';
import * as s from './services';

export function loginBtn() {
  c.loginBtn.addEventListener('click', () => {
    // c.navbar.style.display = 'none';
    c.main.style.display = 'none';
    c.login.style.display = 'block';
  });
}

export function registerBtn() {
  c.registerBtn.addEventListener('click', () => {
    // c.navbar.style.display = 'none';
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
  const newUser = await s.Auth.Register(user);
  console.log(`[New User] =`, newUser);
  c.register.style.display = 'none';
  c.login.style.display = 'block';
}
export async function logIn() {
  const token = await s.Auth.Login({
    email: `${c.inpLogEmail.value}`,
    password: `${c.inpLogPassword.value}`
  });
  c.login.style.display = 'none';
  c.navbar.style.display = 'block';
  c.main.style.display = 'block';
  c.registerBtn.innerText = 'Logout';
  c.loginBtn.innerText = `${c.inpRegUserName.value}`;
}

c.submit.addEventListener('click', submit);
c.singIn.addEventListener('click', logIn);



// export async function loginPage() {
//   const token = await Auth.Login({
//     email: `${loginEmailInput.value}`,
//     password: `${loginPasswordInput.value}`
//   });
//   loginPageHtml.classList.add('d-none');
//   logged.classList.remove('d-none');
//   localStorage.setItem(tokenKey, token);

//   if (localStorage.getItem(tokenKey) != null)
//     console.log('tokenkey', localStorage.getItem(tokenKey));
// }
