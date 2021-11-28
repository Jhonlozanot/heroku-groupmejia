import React, { useState } from "react";
import style from "./companies.module.css";

import DialogEmpresa from "../dialog-empresa/dialog-empresa";

const empresas = [
  {
    title: "ALL SECURITY",
    image: "/static/svg/allsa.svg",
    text: "Empresa especializada en brindar servicios de contrainteligencia empresarial, centrándose en investigaciones corporativas por deshonestidad, manejo de crisis por Conflictos Sociales y Sindicales, y Operaciones Especiales acorde a las necesidades del cliente. La diversa información obtenida es informada a la Alta Dirección para la mejor toma de decisiones a fin de resolver de manera oportuna y eficiente todas aquellas situaciones que puedan afectar la imagen y operaciones de sus representadas. ",
  },
  {
    title: "SECURITY SOLUTIONS",
    image: "/static/svg/saegsecurity.svg",
    text: "Empresa dedicada a la seguridad y vigilancia privada, brindando servicios de protección a personas, instalaciones y eventos, a través de un equipo altamente calificado y especializado de acuerdo a las necesidades del cliente. Dichos servicios se brindan a través de Vigilantes Privados, Profesionales en Protección Ejecutiva, Grupo de Reacción Inmediata y Personal de Seguridad para eventos. Se cuenta también con un centro de confiabilidad donde se realizan evaluaciones POLIGRAFICAS de gran nivel, cumpliendo con estándares internacionales como el del APA (American Polygraph Association) y contando con personal altamente capacitado de larga trayectoria, con lo que se garantiza una asertividad máxima en las pruebas que se realizan.",
  },
  {
    title: "SEGURIDAD DIGITAL",
    image: "/static/svg/saegtechnology.svg",
    text: "Empresa que brinda servicios de seguridad electrónica en todas sus vertientes, diseñando esquemas de seguridad altamente eficaces para la detección de intrusión y soluciones de acción ante situaciones vulnerables. Se cuenta con un gran centro de Control y monitoreo, en el cual se permite integrar cámaras y sensores de nuestros clientes para poder monitorear sus recursos eficientemente. Asimismo, se realiza instalaciones de diversos equipos de seguridad electrónicos como cámaras, controles de accesos, sensores, entre otros.",
  },
  {
    title: "PRODUCTOS LOGÍSTICOS",
    image: "/static/svg/multishop.svg",
    text: "Busca ofrecer a nuestros clientes las soluciones logísticas, facilitando la adquisición de uniformes en general, merchandising, equipos de protección personal entre otros. Ofrecemos precios competitivos, cumpliendo con los tiempos estipulados y otorgando productos de calidad. Siempre manteniendo una comunicación constante post venta que garantiza la satisfacción de nuestros clientes.",
  },
];

const Companies = () => {
  const [allsa, setAllsa] = useState(false);
  const [saegsecurity, setSaegsecurity] = useState(false);
  const [saegpmj, setSaegpmj] = useState(false);
  const [multishop, setMultishop] = useState(false);

  const openAllsa = () => {
    setAllsa(true);
  };
  const openSaegsecurity = () => {
    setSaegsecurity(true);
  };
  const openSaegpmj = () => {
    setSaegpmj(true);
  };
  const openMultishop = () => {
    setMultishop(true);
  };

  const close = () => {
    setAllsa(false);
    setSaegsecurity(false);
    setSaegpmj(false);
    setMultishop(false);
  };

  return (
    <div className={style.companies__container}>
      <div className={style.companiesInfo}>
        <img src="static/png/edificios.png" alt="" />
        <div className={style.companiesInfo__resenia}>
          <h2>Las empresas</h2>
          <p>
            Nuestras empresas trabajan de forma integrada ofreciendo un servicio
            diferenciado a nuestros clientes. Contamos con más de 30 años en el
            mercado y una cartera de clientes altamente satisfechos con nuestra
            calidad de servicio.
          </p>
        </div>
      </div>
      <div className={style.companies__list}>
        <div className={style.companies__list__item}>
          <img src={empresas[0].image} alt="allsa" onClick={openAllsa} />
          <p>
            Investigación y Gestión de Crisis
            {/* Empresa especializada en brindar servicios de investigaciones sobre
            deshonestidad empresarial, manejo de crisis, conflictos sociales,
            sindicales y operaciones especiales, informando y recomendando
            acciones a la Alta Dirección para la mejor toma de decisiones a fin
            de resolver todas aquellas situaciones que puedan afectar la imagen
            y operaciones de la empresa. */}
          </p>
          <DialogEmpresa onClose={close} open={allsa} data={empresas[0]} />
        </div>
        <div className={style.companies__list__item}>
          <img src={empresas[1].image} alt="allsa" onClick={openSaegsecurity} />
          <p>
            Seguridad Física y Poligrafía
            {/* Dedicada al servicio relacionado a la protección de personas,
            instalaciones y eventos a través de personal calificado y
            especializado de acuerdo a las necesidades del cliente con un
            proceso de selección diferenciado. Especialistas en brindar
            servicios de POLIGRAFÍA, herramienta usada como filtro adicional
            para selección de personal con una confiabilidad de 94%. */}
          </p>
          <DialogEmpresa
            onClose={close}
            open={saegsecurity}
            data={empresas[1]}
          />
        </div>
        <div className={style.companies__list__item}>
          <img src={empresas[2].image} alt="allsa" onClick={openSaegpmj} />
          <p>
            Seguridad Electrónica
            {/* Brindamos instalaciones de cámaras, dispositivos y sensores, así
            como Centro de Control integrando todos los sistemas que permita un
            eficiente uso de los recursos. Monitoreo y control de instalaciones
            a través de nuestro Centro de Control, aplicando los protocolos de
            seguridad a fin de evitar amenazas que afecten los recursos, bienes
            e integridad de las instalaciones. */}
          </p>
          <DialogEmpresa onClose={close} open={saegpmj} data={empresas[2]} />
        </div>
        <div className={style.companies__list__item}>
          <img src={empresas[3].image} alt="allsa" onClick={openMultishop} />
          <p>
            Soluciones Logísticas
            {/* Busca ofrecer a nuestros clientes soluciones logísticas, facilitando
            la adquisición de uniformes, merchandising, equipos de protección
            personal entre otros, ofreciendo precios competitivos, cumpliendo
            con los tiempos estipulados, otorgando productos de calidad
            manteniendo una comunicación constante pos venta garantizando la
            satisfacción de nuestros clientes. */}
          </p>
          <DialogEmpresa onClose={close} open={multishop} data={empresas[3]} />
        </div>
      </div>
    </div>
  );
};
export default Companies;
