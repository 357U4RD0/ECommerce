const descuentos = [10, 20, 25, 40, 50];

const juegosConDescuento = [
  {
    id: 21,
    name: 'Hollow Knight',
    price: 14.99,
    img: '/assets/HollowKnight.jpg',
    quantity: 1,
    description: 'Un metroidvania desafiante y atmosférico...',
  },
  {
    id: 22,
    name: 'Celeste',
    price: 19.99,
    img: '/assets/Celeste.webp',
    quantity: 1,
    description: 'Una aventura de plataformas con mensaje emocional...',
  }
].map(juego => {
  const descuento = descuentos[Math.floor(Math.random() * descuentos.length)];
  const precioConDescuento = +(juego.price * (1 - descuento / 100)).toFixed(2);
  return { ...juego, descuento, precioConDescuento };
});

export default juegosConDescuento;
