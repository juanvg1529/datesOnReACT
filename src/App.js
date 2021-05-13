import "./styles.css";
import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Checkbox />
      <Input />
      <Fecha />
    </div>
  );
}
function Fecha() {
  let [valorActual, SetValorActual] = useState(""); //aqui inicializo el input como un string vacio
  const handleClick = (event) => {
    SetValorActual(event.target.value); //va a tomar lo que entra en el input como un evento
    console.log("El valor del input es: ");
    console.log(event.target.value); // me va a mostrar como se van concatenando lo que entra en el input
  };
  return (
    <div>
      <input onChange={handleClick} type="date" />
    </div>
  );
}
function Input() {
  let [valorActual, SetValorActual] = useState(""); //aqui inicializo el input como un string vacio
  const handleClick = (event) => {
    SetValorActual(event.target.value); //va a tomar lo que entra en el input como un evento
    console.log("El valor del input es: ");
    console.log(event.target.value); // me va a mostrar como se van concatenando lo que entra en el input
  };
  return (
    <div>
      <input onChange={handleClick} type="text" />
    </div>
  );
}

function Checkbox() {
  let [valorActual, SetValorActual] = useState(false);

  const handleClick = () => {
    SetValorActual(!valorActual);
  };
  return (
    <div>
      <input checked={valorActual} onChange={handleClick} type="checkbox" />
    </div>
  );
}
