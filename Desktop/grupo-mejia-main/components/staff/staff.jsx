import React from "react";
import style from "./staff.module.css";
import Link from "next/link";

function Staff() {
  return (
    <div className={style.staffContainer}>
      <div className={style.staffCabecera}>
        <h2>NUESTRO STAFF</h2>
      </div>
      <div className={style.staffContaint}>
        <img src="static/png/staff.png" alt="Grupo Mejía" />
        <p>
          Somos un grupo empresarial peruano con más de 30 años de presencia en
          el mercado nacional, iniciando operaciones en Seguridad Integral y
          diversificando nuestros servicios en diferentes sectores económicos.
        </p>
        <Link href="/team">+ Conóce a nuestro staff</Link>
      </div>
    </div>
  );
}
export default Staff;
