import React from "react";
import { formatNumber } from "../utils";

const CardPizza = ({pizza}) => {
  return (
    <div className="container">
      <div className="card" style={{ width: "25rem" }}>
        <img src={pizza.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
          <p className="card-text">{pizza.desc}</p>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <a href="#" className="btn btn-primary">
        <p className="card-text">Precio: ${formatNumber(pizza.price)}</p>
        </a>
        <br />
          <button className="btn btn-primary">Ver más</button>
          <button className="btn btn-secondary">Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
