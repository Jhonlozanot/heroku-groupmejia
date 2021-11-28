import React from "react";
import styles from "./banner-staff.module.css";

const BannerStaff = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerTitulo}>
        <h1 className={styles.bannerTituloText}> Grupo Mejia STAFF </h1>
        <p className={styles.bannerTituloTextDesc}>
          Nuestro Staff está conformado por profesionales de diferentes áreas
          capacitados y comprometidos en brindar los mejores servicios, poniendo
          en práctica sus habilidades y conocimientos para atender a nuestros
          clientes.
        </p>
      </div>
    </section>
  );
};

export default BannerStaff;
