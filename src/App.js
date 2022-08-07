import './App.css';
import freeCodeCampLogo from './imagenes/logo.svg';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear.jsx';
import { useState } from 'react';  // useState es un hook que devuelve un array con dos elementos: el primero es el valor del estado y el segundo es una función que permite cambiar el valor del estado
import { evaluate } from 'mathjs';  // mathjs es una librería que permite evaluar un string

function App() {

  const [input, setInput] = useState("0");  // input es el valor del estado y setInput es una función que permite cambiar el valor del estado

  const agregarInput = (valor) => { // agregarInput es una función que recibe un valor y lo agrega al estado
    if (input === "0") { // si el estado es 0
      setInput(valor);  // cambia el estado a valor
    } else {
      setInput(input + valor); // si el estado no es 0, agrega el valor al estado
    }
  };

  const calcularResultado = () => {
    if(input){  // si el estado no es vacío
      setInput(evaluate(input));// evaluate es una función que evalua un string y devuelve un string
    }else{
      setInput("0"); // si el estado es vacío cambia el estado a 0
    }
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='freecodecamp-logo' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton> {/* manejarClick es una función que recibe un valor y lo agrega al estado */}
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('0')}>AC</BotonClear> {/*  manejarClear es una función que recibe una función y la ejecuta */}
        </div>
      </div>
    </div>
  );
}

export default App;
