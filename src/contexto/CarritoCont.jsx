import { createContext } from "react";

const CarritoContext = createContext({
  addToCart: () => {},
})

export default CarritoContext;