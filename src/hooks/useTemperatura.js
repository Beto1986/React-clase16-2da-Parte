import { useState, useEffect } from "react";

const useTemperatura = () => {
  const [temperatura, setTemperatura] = useState(0);
  const [mensaje, setMensaje] = useState("Suba la temperatura");

  useEffect(() => {
    actualizarMensaje();
  }, [temperatura]);

  const actualizarMensaje = () => {
    if (temperatura > 0) {
      setMensaje("Temperatura por encima del cero");
    } else {
      setMensaje("Suba la temperatura");
    }
  };

  return { setTemperatura, temperatura, mensaje };
};

export default useTemperatura;
