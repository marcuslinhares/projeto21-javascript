document.addEventListener("DOMContentLoaded", () => {

    const dados = JSON.parse(localStorage.getItem("dadosLoginDyamond"));

    if (!dados) {
        window.location.href = "../index.html";
        return;
    }

    document.getElementById("username").innerText = dados.username;
    document.getElementById("id").innerText = `ID: ${dados.id}`;
    document.getElementById("fullname").innerText = `Nome: ${dados.firstName} ${dados.lastName}`;
    document.getElementById("email").innerText = `Email: ${dados.email}`;
    document.getElementById("gender").innerText = `Gênero: ${dados.gender}`;
    document.getElementById("image").src = dados.image;
});

function logout() {
    localStorage.removeItem("dadosLoginDyamond");
    window.location.href = "../index.html";
}
