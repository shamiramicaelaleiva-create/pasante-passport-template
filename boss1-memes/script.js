const inputUrl = document.getElementById('inputUrl');
const inputTop = document.getElementById('inputTop');
const inputBottom = document.getElementById('inputBottom');

const memeImg = document.getElementById('memeImg');

const textoTop = document.getElementById('textoTop');
const textoBottom = document.getElementById('textoBottom');

const btnDescargar = document.getElementById('btnDescargar');

const templates = document.getElementById('templates');

const memes = [
  {
    nombre: 'absolute cinema',
    url: 'https://i.imgflip.com/atbv0s.jpg'
  },
  {
    nombre: 'megamente tite',
    url: 'https://i.imgflip.com/64sz4u.png'
  },
  {
    nombre: 'two guys on a bus',
    url: 'https://i.imgflip.com/5v6gwj.jpg'
  }
];
memes.map(meme => {

  const boton = document.createElement('button');

  boton.textContent = meme.nombre;

  boton.classList.add('template-btn');

  boton.addEventListener('click', () => {

    inputUrl.value = meme.url;

    memeImg.src = meme.url;
  });

  templates.appendChild(boton);
});

inputUrl.addEventListener('input', e => {
  memeImg.src = e.target.value;
});

inputTop.addEventListener('input', e => {
  textoTop.textContent = e.target.value;
});

inputBottom.addEventListener('input', e => {
  textoBottom.textContent = e.target.value;
});

btnDescargar.addEventListener('click', () => {

  html2canvas(document.getElementById('meme'))
    .then(canvas => {

      const link = document.createElement('a');

      link.download = 'meme.png';

      link.href = canvas.toDataURL();

      link.click();
    });
});