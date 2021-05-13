import "./styles.css";
import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Checkbox />
      <Input />
      <Select />
      {/* <Fecha /> */}
    </div>
  );
}

//manejo de dates
function Select() {
  let [valorActual, SetValorActual] = useState("naranja"); //aqui inicializo el input como un string vacio

  const handleClick = (event) => {
    SetValorActual(event.target.value); //va a tomar lo que entra en el input como un evento
    console.log("El valor del input es: ");
    console.log(event.target.value); // me va a mostrar como se van concatenando lo que entra en el input
  };

  return (
    <div>
      <select>
        <option onChange={handleClick} value={valorActual}></option>
        <option value="manzana">Manzana</option>
        <option value="naranja">Naranja</option>
        <option value="uva">Uva</option>
      </select>
    </div>
  );
}
// function Fecha() {
//   let [valorActual, SetValorActual] = useState(""); //aqui inicializo el input como un string vacio
//   //let [tiempoUnix, setTiempoUnix] = useState(0); //para actualizar el estado
//   const handleClick = (event) => {
//     SetValorActual(event.target.value); //
//     //hay que pasar esa fecha a tiempo unix
//     //iniciliazar una nueva vairbele con el event.target.value
//     const dateString = new Date(event.target.value);
//     // const tiempoUnix=dateString.getTime();//asi lo paso al tienpo unix
//     const tiempoUnix = new Date(event.target.value).getTime(); //esto es lo mismo de arriba
//     // const fechaYear = dateString.getFullYear();
//     setTiempoUnix(tiempoUnix); //para actualizar el estado
//     console.log("El valor del tiempo unix es es: ");
//     console.log(tiempoUnix); // muestto el tiempo unix
//   };
//   return (
//     <div>
//       <input onChange={handleClick} type="date" />
//     </div>
//   );
// }
//manejo de inputs
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
