import React from "react";
import style from "./company-info.module.css";

function CompanyInfo() {
  return (
    <div className={style.companyInfo}>
      <div className={style.companyInfo__resenia}>
        <h2>Grupo Mejia</h2>
        <p>
          Es un conglomerado de empresas cuyo fin es brindar diversos servicios
          de seguridad y logística a fin de satisfacer las necesidades de
          nuestros clientes de manera integral. Estas empresas son ALL SECURITY
          (ALLSSA), SAEG SECURITY, SAEG TECHNOLOGY y MULTISHOP.
        </p>
      </div>
      <img src="static/png/concepto.png" alt="" />
    </div>
  );
}
export default CompanyInfo;
