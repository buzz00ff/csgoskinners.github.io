// Hasło do logowania do panelu administracyjnego
const adminPassword = 'TWOJE_HASŁO';

// Pobierz elementy interfejsu
const passwordInput = document.getElementById('password-input');
const loginButton = document.getElementById('login-button');
const userList = document.getElementById('user-list');

// Sprawdź, czy użytkownik jest na stronie logowania administracji
const isAdminLogin = window.location.pathname === '/k3$$es420'; // Twój link do panelu logowania administracji

// Jeśli jesteś na stronie logowania administracji, pokaż panel logowania
if (isAdminLogin) {
  document.getElementById('admin-panel').style.display = 'block';
}

// Dodaj nasłuchiwanie zdarzenia kliknięcia na przycisk logowania
loginButton.addEventListener('click', () => {
  const enteredPassword = passwordInput.value;

  if (enteredPassword === adminPassword) {
    // Jeżeli hasło jest poprawne, przekieruj na stronę panelu administracyjnego
    window.location.href = '/admin-panel'; // Twój link do panelu administracyjnego
  } else {
    // Jeżeli hasło jest niepoprawne, wyświetl komunikat błędu
    alert('Nieprawidłowe hasło!');
  }
});

// Funkcja pokazująca panel administracyjny
function showAdminPanel() {
  // Tutaj możesz wykonać różne operacje administracyjne

  // Pobierz listę użytkowników (możesz pobrać dane z serwera)
  const users = getUsersFromServer();

  // Wyświetl informacje o użytkownikach
  displayUserList(users);
}

// Funkcja pobierająca listę użytkowników z serwera (przykładowa implementacja)
function getUsersFromServer() {
  // Tutaj wykonaj żądanie do serwera, np. z pomocą Fetch API lub Axios
  // Zwróć listę użytkowników
  return [
    { name: 'Użytkownik 1', steamID: 'STEAM_ID_1' },
    { name: 'Użytkownik 2', steamID: 'STEAM_ID_2' },
    { name: 'Użytkownik 3', steamID: 'STEAM_ID_3' },
    // ...
  ];
}

// Funkcja wyświetlająca informacje o użytkownikach
function displayUserList(users) {
  userList.innerHTML = '';

  users.forEach(user => {
    const userItem = document.createElement('div');
    userItem.innerText = `${user.name} (SteamID: ${user.steamID})`;

    userList.appendChild(userItem);
  });
}

// Jeżeli jesteś na stronie panelu administracyjnego, wywołaj funkcję pokazującą panel
if (window.location.pathname === '/admin-panel') { // Twój link do panelu administracyjnego
  showAdminPanel();
}
