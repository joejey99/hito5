import React from "react";

const Header = () => {
  const headerStyle = {
    backgroundImage:
      "url(https://img.freepik.com/vector-gratis/fondo-pizarra-pizza_23-2148907816.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "300px",
    textAlign: "center",
    padding: "100px 0",
  };

  return (
    <div style={headerStyle} className="text-white">
      <div>
        <h1 className="bg-dark">Bienvenido a Pizzería Mamma</h1>
        <h5 className="bg-dark">
          Las mejores pizzas de la ciudad, ¡prueba nuestras especialidades!
        </h5>
      </div>
    </div>
  );
};

export default Header;
