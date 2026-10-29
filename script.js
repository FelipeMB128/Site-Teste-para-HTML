const musica = document.getElementById("MusicaTema");
const efeito = document.getElementById("efeito");
const botao = document.getElementById("botao");

musica.volume = 0.03;
efeito.volume = 0.5;

botao.addEventListener("click", () => {
  musica.play(); // garante que a música toque, mesmo se o autoplay for bloqueado
  efeito.currentTime = 0.3;
  efeito.play();
});
