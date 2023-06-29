// Funkcja do obsługi kliknięcia przycisku logowania
function handleLogin() {
  // Przekierowanie użytkownika do strony logowania Steam
  window.location.href = "https://steamcommunity.com/openid/login";
}

// Nasłuchiwanie zdarzenia kliknięcia przycisku logowania
document.getElementById("login-button").addEventListener("click", handleLogin);