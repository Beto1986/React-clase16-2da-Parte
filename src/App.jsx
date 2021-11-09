/*

CONSIGNA (https://docs.google.com/document/d/1x9WXw_JAvjviu6ZdSsLhhKAxR6UcEgCXgxTjLrL_zIs/edit)

- Generar un proyecto en react que pida, por medio de un input de tipo number, una temperatura medida en grados celsius.
- En cuanto tengamos un valor que sea superior al cero se mostrará un cartel que informe “Temperatura por encima del cero”, si la temperatura es menor o igual a cero nos mostrará un cartel que diga “Suba la temperatura”.
- En el componente principal no deberá tener states ni efectos pero el proyecto deberá contenerlo.


*/

import "./styles.css";
import useTemperatura from "./hooks/useTemperatura";
import Calculadora from "./components/Calculadora/Calculadora";

export default function App() {
  const { setTemperatura, temperatura, mensaje } = useTemperatura();

  const handleChange = (e) => {
    setTemperatura(e.target.value);
  };

  return (
    <div className="App">
      <input
        type="number"
        value={temperatura}
        onChange={(e) => handleChange(e)}
      />
      <p>{mensaje}</p>

      <br />
      <Calculadora />
    </div>
  );
}
