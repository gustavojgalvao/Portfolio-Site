

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

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  let requestId = null;

  card.addEventListener('mousemove', e => {
    if (requestId) return; // evita múltiplas chamadas simultâneas

    requestId = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -50;
      const rotateY = ((x - centerX) / centerX) * 50;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      requestId = null;
    });
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});