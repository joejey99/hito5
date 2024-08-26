import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import pizzas from "../pizzas.json";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container d-flex flex-column align-items-center">
        <div className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4">
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
