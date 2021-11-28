import React from "react";
import style from "./company-pmv.module.css";
const proposito = "/static/png/proposito.png";
const mision = "/static/png/mision.png";
const vision = "/static/png/vision.png";
function companayPmv() {
  return (
    <div className={style.companypmv}>
      <div className={style.companypmv__item}>
        <img src={proposito} alt="proposito" />
        <h2>Proposito</h2>
        <p>
          Brindar soluciones integrales en seguridad corporativa enfocados en
          atender las necesidades de nuestros clientes y ofrecer soluciones
          eficientes para el crecimiento y continuidad de su negocio.
        </p>
      </div>
      <div className={style.linea}></div>
      <div className={style.companypmv__item}>
        <img src={mision} alt="mision" />
        <h2>Misión</h2>
        <p>
          Garantizar la seguridad y tranquilidad de nuestros clientes ofreciendo
          servicios innovadores y de alta calidad, incorporando tecnología de
          punta a todas nuestras soluciones.
        </p>
      </div>
      <div className={style.linea}></div>
      <div className={style.companypmv__item}>
        <img src={vision} alt="vision" />
        <h2>Visión</h2>
        <p>
          Buscar la excelencia de nuestros servicios, mientras incrementamos con
          responsabilidad nuestra participación en el mercado nacional.
        </p>
      </div>
    </div>
  );
}
export default companayPmv;
