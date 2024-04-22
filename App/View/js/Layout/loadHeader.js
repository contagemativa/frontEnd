// loadHeader.js
document.addEventListener("DOMContentLoaded", function() {
    // Use o método fetch para carregar o conteúdo do arquivo header.html
    fetch("../../html/layout/header.html")
        .then(response => response.text())
        .then(html => {
            // Insira o conteúdo do cabeçalho na div com id "header"
            document.getElementById("header").innerHTML = html;
        })
        .catch(error => console.error("Erro ao carregar o cabeçalho:", error));
});