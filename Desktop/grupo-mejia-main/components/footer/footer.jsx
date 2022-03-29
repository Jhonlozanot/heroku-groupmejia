import React from "react";
import style from "./footer.module.css";

const fb = "/static/svg/facebook.svg";
const ln = "/static/svg/linkedin.svg";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer__icons}>
        <a href="https://www.facebook.com/mejiagrupo" target="_blank">
          <img src={fb} alt="facebook icon" />
        </a>
        <a
          href="https://www.linkedin.com/company/grupomejia/mycompany/"
          target="_blank"
        >
          <img src={ln} alt="linkedin icon" />
        </a>
      </div>
      <div className={style.footer__information}>
        <div className={style.footerLema}>
          <img src="https://grupomejia.pe/static/png/eme.png" alt="" />
          <p>
            Nuestros resultados garantizan la satisfacción de nuestros clientes
            para la continuidad de su negocio.
          </p>
        </div>
        <div className={style.footer_line}></div>

        <div className={style.footerTextos}>
          <div className={style.footerText}>
            <img src="static/svg/locacion.svg" alt="" />
            <p>Calle las Camelias 820 of 401, San Isidro, Lima.</p>
          </div>
          <div className={style.footerText}>
            <img src="static/svg/phone.svg" alt="" />
            <p>+51 3379632</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
