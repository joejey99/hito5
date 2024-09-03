import React, {useState,useEffect} from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
/* import pizzas from "../pizzas.json"; */

const Home = () => {

  const [pizzas, setPizzas] = useState([])

  const obtenerInformacion = async()=> {
    const respuesta = await fetch("http://localhost:5000/api/pizzas")
    const datos = await respuesta.json()
    setPizzas(datos)
  }

  useEffect(()=> {
    obtenerInformacion()
  }, [])

  return (
    <div>
      <Header />
      <div className="container d-flex flex-column align-items-center">
        <div className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4">
              <CardPizza pizza={pizza}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
