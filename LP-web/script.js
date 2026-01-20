function enviar() {
    const nome = document.getElementById("nome").value;
    const assunto = document.getElementById("assunto").value;

    // template string para formatar a mensagem
    const mensagem = `Olá, meu nome é ${nome}. \n\nAssunto: ${assunto}`;
    const msg = encodeURIComponent(mensagem);

    //window.location.href = `https://wa.me/5541999559503?text=${msg}`;
    window.open(`https://wa.me/5541*********?text=${msg}`, '_blank');
}