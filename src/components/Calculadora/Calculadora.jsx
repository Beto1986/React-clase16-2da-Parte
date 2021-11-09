/*
- Hacer una calculadora que contenga un input en donde se ingresará un valor.
- La calculadora solo sumará números.
- El resultado se irá mostrando por medio de un display.
- Si el número a sumar es mayor a 100 deberá mostrarse un cartel debajo del display que informe “No puedo mostrar un valor superior a 100”. El resultado seguirá siendo el número anterior a 100 y el número dentro del input cambiará a cero.
*/
import { useState, useEffect } from "react";

export default function Calculadora() {
  const [numeroIngresado, setNumeroIngresado] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setNumeroIngresado(e.target.value);
  };

  const handleClick = () => {
    // Faltaría armar el condicional!
    setResultado(resultado + Number(numeroIngresado));
  };

  return (
    <>
      <input
        type="number"
        value={numeroIngresado}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <button onClick={handleClick}>Sumar!</button>
      <p>El resultado es: {resultado}</p>
      <p>{mensaje}</p>
    </>
  );
}
