function irParaPagina(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    const pagina = document.getElementById("escolha").value;

    if (nome === "") {
        alert("Digite seu nome!");
    }
    else if (pagina === "") {
        alert("Escolha um assunto!");
    }
    else {
        sessionStorage.setItem("nome", nome);
        window.location.href = pagina;
    }
}
function mostrarMensagem() {
    const nome = sessionStorage.getItem("nome");
    const mensagem = document.getElementById("mensagem");

    if (mensagem === null) {
        return;
    }

    if (!nome) {
        mensagem.textContent = "Bem-vindo! 💙";
        return;
    }

    let texto = "";

    if (window.location.pathname.endsWith("Ansiedade.html")) {
        texto = `Olá, ${nome}! Você não precisa ter medo da sua ansiedade. 💙`;
    }
    else if (window.location.pathname.endsWith("TDAH.html")) {
        texto = `Olá, ${nome}! Ter TDAH não diminui sua capacidade de conquistar seus objetivos! 💙`;
    }
    else if (window.location.pathname.endsWith("Depressao.html")) {
        texto = `Olá, ${nome}! Você não precisa enfrentar a depressão sozinho. 💙`;
    }
    else if (window.location.pathname.endsWith("Estresse.html")) {
        texto = `Olá, ${nome}! Respeite seus limites e lembre-se de descansar. 💙`;
    }

    mensagem.textContent = texto;
    console.log(texto);
}
mostrarMensagem();
