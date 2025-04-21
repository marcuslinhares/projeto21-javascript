document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const apiUrl = 'https://dummyjson.com';

    const dados = JSON.parse(localStorage.getItem("dadosLoginDyamond"));
    if (dados) {
        window.location.href = "./pages/perfil.html";
        return;
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const erro = document.getElementById("result");

        try {
            const response = await fetch(apiUrl + '/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (data.accessToken) {
                localStorage.setItem("dadosLoginDyamond", JSON.stringify(data));
                window.location.href = "./pages/perfil.html";
            } else {
                erro.innerHTML = "Usuário ou senha inválidos!";
            }
        } catch (err) {
            erro.innerHTML = "Erro ao fazer login!";
        }
    });
});
