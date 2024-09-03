import React,{useState,useEffect} from 'react'
import CardPizza from './CardPizza'

const Pizza = () => {
    const [pizza, setPizza] = useState({});

    const obtenerInformacion = async () => {
        const respuesta = await fetch("http://localhost:5000/api/pizzas/p001");
        const datos = await respuesta.json();
        console.log(datos);
        setPizza(datos);
    };

    useEffect(() => {
      obtenerInformacion();
    }, []);

    // Verifica si 'pizza' tiene datos antes de renderizar
    if (!pizza.name) return <p>Cargando información de la pizza...</p>;

    return (
      <div className="container d-flex flex-column align-items-center">
        <div className="row">
          <div className="col-md-4">
            <CardPizza pizza={pizza} />
          </div>
        </div>
      </div>
    );
  };
  
  export default Pizza;