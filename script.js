

function enviarWhats(event) {
    event.preventDefault()

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const telefone = '5571992550509'

    const texto = `Me chamo ${nome}, ${mensagem}. Espero sua Resposta!`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://whatsa.me/5571992550509/?t=${msgFormatada}`

    window.open(url, '_blank')

    console.log(url)

}