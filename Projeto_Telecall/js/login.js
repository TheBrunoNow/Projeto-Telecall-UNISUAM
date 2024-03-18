/*DARK MODE*/

const darkModeToggleBtn = document.getElementById('darkModeToggleBtn');
        const body = document.body;

        // Recupere o estado do modo escuro do armazenamento local
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            enableDarkMode();
        }

        darkModeToggleBtn.addEventListener('click', function() {
            // Inverta o estado do modo escuro
            if (body.classList.contains('dark-mode')) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });

        function enableDarkMode() {
            body.classList.add('dark-mode');
            darkModeToggleBtn.classList.add('dark-mode-on');
            // Salve o estado do modo escuro no armazenamento local
            localStorage.setItem('darkMode', 'true');
        }

        function disableDarkMode() {
            body.classList.remove('dark-mode');
            darkModeToggleBtn.classList.remove('dark-mode-on');
            // Salve o estado do modo escuro no armazenamento local
            localStorage.setItem('darkMode', 'false');
        }


//FUNÇÃO AUMENTAR FONTE

document.getElementById('increaseFontBtn').addEventListener('click', function() {
    changeFontSize(5); // Aumenta a fonte em 5 pixels
});

document.getElementById('decreaseFontBtn').addEventListener('click', function() {
    changeFontSize(-5); // Diminui a fonte em 5 pixels
});

function changeFontSize(delta) {
    const currentSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
    body.style.fontSize = (currentSize + delta) + 'px';
}       

    

document.getElementById('ag').addEventListener('submit', function(event) {
  event.preventDefault();
  const enteredUsername = document.getElementById('login').value;
  const enteredPassword = document.getElementById('senha').value;

  const storedUsername = localStorage.getItem('login');
  const storedPassword = localStorage.getItem('senha');

  if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
    alert('Login bem-sucedido!');
    this.reset();

    // Redirecionar para outra página
    window.location.href = 'index.html';
  } else {
    alert('Usuário ou senha incorretos.');
  }
});






//FUNÇÃO MOSTRAR SENHAS


function toggleSenha() {
    var senhaInput = document.getElementById("senha");
    if (senhaInput.type === "password") {
      senhaInput.type = "text";
    } else {
      senhaInput.type = "password";
    }
  }


