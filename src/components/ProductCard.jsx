import React, {useState} from 'react'
//import { useNavigate } from 'react-router-dom';
const ProductCard = ({ product }) => {
    const [count, setCount] = useState(0);
    //const navigate = useNavigate();

    const DirImagen = () => {
     // navigate()
    }

    const ClickPrueba = () => {
        setCount(cuenta => cuenta + 1);
        console.log(`${product.name} ${count + 1}`);
    }
  
    return (
    <div className="card">
      <img onDoubleClick={DirImagen} src={product.img} alt={product.name} className="card-img" />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick = {ClickPrueba}>Añadir</button>
      </div>
  );
}

export default ProductCard;