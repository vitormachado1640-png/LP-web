function enviar() {
    var nome = document.getElementById("nome").value;
    var assunto = document.getElementById("assunto").value;

    if (nome === "" || assunto === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
    } else {
        alert("Mensagem enviada com sucesso! Obrigado, " + nome + ".");
        document.getElementById("nome").value = "";
        document.getElementById("assunto").value = "";
    }