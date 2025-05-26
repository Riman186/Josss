// Esperar a que cargue todo el DOM
window.addEventListener("DOMContentLoaded", () => {
  // Scroll al mensaje
  const btn = document.getElementById('enterButton');
  if (btn) {
    btn.addEventListener('click', () => {
      document.getElementById('mensaje').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Mostrar regalo con confeti (oculto por defecto)
  const mostrarBtn = document.getElementById('mostrarRegalo');
  const contenidoRegalo = document.getElementById('contenidoRegalo');
  if (mostrarBtn && contenidoRegalo) {
    contenidoRegalo.style.display = "none";
    mostrarBtn.addEventListener('click', () => {
      contenidoRegalo.style.display = "block";
      lanzarConfeti();
    });
  }

  // Función de confeti simple
  function lanzarConfeti() {
    for (let i = 0; i < 100; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particula');
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.backgroundColor = getRandomColor();
      particle.style.animationDelay = `${Math.random()}s`;
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 3000);
    }
  }

  function getRandomColor() {
    const colors = ['#FFD700', '#FF69B4', '#E6E6FA', '#F7C6D9'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Animar fotos al hacer clic
  const tarjetas = document.querySelectorAll('.tarjeta');
  tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener('click', () => {
      tarjeta.classList.toggle('girado');
    });
  });

  // Fuegos artificiales (simple)
  const canvas = document.getElementById("fuegosArtificiales");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = 300;

    function dibujarCirculo(x, y, radio, color) {
      ctx.beginPath();
      ctx.arc(x, y, radio, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }

    function animarFuegos() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const r = Math.random() * 4 + 1;
        const colores = ["#FFD700", "#FF69B4", "#E6E6FA", "#F7C6D9"];
        const color = colores[Math.floor(Math.random() * colores.length)];
        dibujarCirculo(x, y, r, color);
      }
    }

    setInterval(animarFuegos, 500);
  }

  // Mostrar papel al tocar sobre (cerrado por defecto)
  const sobre = document.getElementById("sobre");
  const papel = document.getElementById("papel");
  const solapa = document.querySelector("#sobre .solapa");

  if (sobre && papel && solapa) {
    papel.classList.remove("visible");
    solapa.classList.remove("abierta");
    sobre.addEventListener("click", () => {
      papel.classList.add("visible");
      solapa.classList.add("abierta");
    }, { once: true });
  }
});
