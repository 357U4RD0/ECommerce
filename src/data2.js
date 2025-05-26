const descuentos = [10, 20, 25, 40, 50];

const data2 = [
  {
    id: 21,
    name: 'Hollow Knight',
    price: 14.99,
    img: '/assets/HollowKnight.jpg',
    quantity: 1,
    description: 'Explora un vasto mundo subterráneo lleno de insectos y secretos en este juego Metroidvania. Enfrenta jefes desafiantes y desbloquea habilidades mientras descubres una historia oculta. Destaca por su arte dibujado a mano y su atmósfera oscura.',
  },
  {
    id: 22,
    name: 'Celeste',
    price: 19.99,
    img: '/assets/Celeste.webp',
    quantity: 1,
    description: 'Acompaña a Madeline en su ascenso a la montaña Celeste, enfrentando niveles precisos y desafiantes. El juego mezcla plataformas exigentes con una historia profunda sobre salud mental. Su música y diseño visual refuerzan la conexión emocional.',
  },
  {
    id: 23,
    name: 'Call of Duty: Black Ops 3',
    price: 24.99,
    img: '/assets/COD.jpg',
    quantity: 1,
    description: 'Es un juego de disparos en primera persona de la serie Call of Duty que se centra en la guerra futurista, con mecánicas de movilidad avanzadas como correr por las paredes y saltos dobles. Además de su campaña, incluye un modo multijugador altamente competitivo y un modo zombi que se convirtió en uno de los más populares de la saga.',
  },
  {
    id: 24,
    name: 'Halo 3',
    price: 34.99,
    img: '/assets/Halo.avif',
    quantity: 1,
    description: 'Un juego de disparos en primera persona de Halo, que sigue las aventuras del Jefe Maestro mientras lucha contra la amenaza de los Covenant y los Flood. Es conocido por su modo multijugador, mapas icónicos y su narrativa épica de ciencia ficción.',
  },{
    id: 25,
    name: 'PES 2012',
    price: 7.99,
    img: '/assets/Pes.jpg',
    quantity: 1,
    description: 'Es un juego de fútbol de la serie Pro Evolution Soccer, conocido por su jugabilidad realista y el control preciso del balón. Presenta mejoras en la inteligencia artificial, mayor fluididez en los movimientos y un sistema de defensa más táctico, lo que lo convierte en uno de los títulos más aclamados de la franquicia en su época.',
  }
].map(juego => {
  const descuento = descuentos[Math.floor(Math.random() * descuentos.length)];
  const precioConDescuento = +(juego.price * (1 - descuento / 100)).toFixed(2);
  return { ...juego, descuento, precioConDescuento };
});

export default data2;