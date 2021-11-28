import React from "react";
import Image from "next/image";
import style from "./containerNosotros.module.css";

const ContainerNosotros = () => {
  return (
    <div className={style.container}>
      <section className={style.panel}>
        <div className={style.img}>
          <img src="/static/png/logo.png" alt="logo" width="80%" />
        </div>
        <div className={style.sized}></div>
        <div className={style.text}>
          <h2>¿Quienes somos?</h2>
          <p>
            Somos un grupo empresarial peruano con más de 30 años de presencia
            en el mercado nacional, iniciando operaciones en Seguridad Integral
            y diversificando nuestros servicios en diferentes sectores
            económicos. <br /> <br /> Las empresas del GRUPO MEJIA, con
            innovación, sinergia y responsabilidad social están comprometidas
            con el desarrollo del país, contribuyendo al progreso y creando
            oportunidades laborales.
          </p>
        </div>
      </section>
      <section className={style.historia}>
        <div className={style.historiaText}>
          <h2>Historia</h2>
          <p>
            En 1989 se constituye SAEG SRLTDA, para brindar servicios de
            consultoría y seguridad en los procesos de reclutamiento de
            personal. <br /> <br /> En 1993 se crea ALL SECURITY SA, ofreciendo
            soluciones de seguridad e investigaciones corporativas. <br />{" "}
            <br /> Con el transcurso de los años, nos hemos consolidado y
            posicionado como expertos en seguridad corporativa Integral.
            Desarrollando soluciones innovadoras y de alta calidad que permitan
            atender satisfactoriamente las necesidades, cada vez mayores, de
            nuestros clientes. <br /> <br /> Posteriormente formamos SAEG
            SECURITY y SAEG TECHNOLOGY con el objetivo de cerrar el círculo en
            cuanto a servicios de seguridad e incorporar soluciones de seguridad
            física y electrónica que incorporan tecnología de punta y nuevos
            sistemas de control. <br /> <br />
            Así nace GRUPO MEJÍA. Comprometidos con tu tranquilidad.
          </p>
        </div>
        <div className={style.historiaImg}>
          {/* <img src="/static/png/persona-historia.png" alt="logo" width="100%" /> */}
          <Image
            src="/static/png/historia-tio.png"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
      </section>
      <section className={style.marcasSec}>
        <div className={style.frase}>
          <h2>Más de 30 años de experiencia nos respaldan</h2>
        </div>
        <div className={style.brand__container}>
          <div className={style.brand}>
            <img
              className={style.brand__image}
              src="/static/svg/allsa.svg"
              alt="allsa"
            />
          </div>
          <div className={style.brand}>
            <img
              className={style.brand__image}
              src="/static/svg/saegsecurity.svg"
              alt="saegsecurity"
            />
          </div>
          <div className={style.brand}>
            <img
              className={style.brand__image}
              src="/static/svg/saegtechnology.svg"
              alt="saeg"
            />
          </div>
          <div className={style.brand}>
            <img
              className={style.brand__image}
              src="/static/svg/multishop.svg"
              alt="multishop"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContainerNosotros;
