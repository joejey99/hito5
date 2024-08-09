import React from "react";
import { formatNumber } from '../utils';

const CardPizza = (props) => {


  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            Ingredientes: {props.ingredients.join(", ")}
          </p>
          <p className="card-text">Precio: ${formatNumber(props.price)}</p>
          <button className="btn btn-primary">Ver más</button>
          <button className="btn btn-secondary">Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
