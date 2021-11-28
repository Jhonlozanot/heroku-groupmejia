import React from "react";
import styles from "./banner-nosotros.module.css";

const BannerNosotros = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerTitulo}>
        <h1 className={styles.bannerTituloText}> Nosotros </h1>
      </div>
    </section>
  );
};

export default BannerNosotros;
