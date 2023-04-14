const loginBtn = document.querySelector('.loginFormLoginBtn');
const nameInput = document.querySelector('.loginFormNameInput');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (nameInput.value) {
    const login = nameInput.value;
    localStorage.setItem('name', login);
    window.location.replace('/');
  } else {
    document.querySelector('.loginFormErrorMessage').innerHTML = 'Пожалуйста, введите имя';
  }
});
