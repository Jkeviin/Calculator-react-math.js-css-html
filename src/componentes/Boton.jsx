import React from "react";
import '../hojas-de-estilo/Boton.css';

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "=" && valor !== ".";  // isNaN es una función que devuelve true si el valor es NaN || retorna false si no es NaN
  }

  return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() =>props.manejarClick(props.children)}>  {/* trim es una función que elimina los espacios en blanco al inicio y al final de un string */}
      {props.children}
    </div>
  );
}
export default Boton;