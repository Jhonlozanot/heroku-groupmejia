import React from "react";
import style from "./imagenFondoIndex.module.css";
const fondo = "/static/png/imgFondo.png";
function imagenFondo() {
  return (
    <div className={style.imge}>
      
      <img
        src={fondo} alt="img-fondo"
      />
    </div>
  );
}
export default imagenFondo;
