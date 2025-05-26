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
  }
].map(juego => {
  const descuento = descuentos[Math.floor(Math.random() * descuentos.length)];
  const precioConDescuento = +(juego.price * (1 - descuento / 100)).toFixed(2);
  return { ...juego, descuento, precioConDescuento };
});

export default data2;