import React, { useState } from 'react';
import pizzas from '../pizzas.json';

const Cart = () => {
  const initialCart = pizzas.map(pizza => ({ ...pizza, quantity: 0 }));
  const [cart, setCart] = useState(initialCart);

  const increaseQuantity = (id) => {
    setCart(cart.map(pizza =>
      pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map(pizza =>
      pizza.id === id && pizza.quantity > 0 ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
    ).filter(pizza => pizza.quantity > 0 || pizza.quantity === 0));
  };

  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);

  return (
    <div className="container d-flex flex-column align-items-center">
      <h2>Carrito de Compras</h2>
      <div className="row">
        {cart.map(pizza => (
          <div key={pizza.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <img src={pizza.img} className="card-img-top" alt={pizza.name} />
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">Precio: ${pizza.price}</p>
                <p className="card-text">Cantidad: {pizza.quantity}</p>
                <div>
                  <button className="btn btn-primary me-2" onClick={() => increaseQuantity(pizza.id)}>+</button>
                  <button className="btn btn-danger" onClick={() => decreaseQuantity(pizza.id)}>-</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3>Total: ${total}</h3>
      <button className="btn btn-success">Pagar</button>
    </div>
  );
};

export default Cart;
