const userRegister = (navigateTo) => {
  const template = `
  <div class="userRegister">
    <header>
      <div class="imgLogo">
        <img src="./img/logo2.png" alt="logo">
      </div>
    </header>
    <main>
      <h2 class="tittleUserRegister">Usuario registrado</h2>
      <button type="button" class="logInRegister"> Iniciar sesión </button>
    </main>
    <footer>
      <img src="./img/UserRegister.png" alt="userRegister">
    </footer>
  </div>
  `;

  const element = document.createElement('div');
  element.innerHTML = template.trim();

  // Obtiene el botón "Registrarse" por su clase
  const logInRegister = element.querySelector('.logInRegister');

  // Agrega el evento "click" al botón "Registrarse"
  logInRegister.addEventListener('click', () => {
    navigateTo('/');
  });

  return element.firstChild;
};

export default userRegister;