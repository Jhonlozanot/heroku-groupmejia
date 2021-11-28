import React from "react";

import styles from "./customerItem.module.css";

const CustomerItem = ({ imagen, nombre, cargo, empresa, imagen_empresa }) => {
  return (
    <>
      <article className={styles.customerItem}>
        <figure className={styles.customerItem__image_container}>
          <img
            src={imagen}
            alt={nombre}
            className={styles.customerItem__image}
          />
        </figure>
        <div className={styles.customerItem__description_container}>
          <div>
            <h3 className={styles.customerItem__name}>{nombre}</h3>
            <p className={styles.customerItem__job}>{cargo}</p>
          </div>
          <p className={styles.customerItem__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quae consectetur necessitatibus eveniet sequi cupiditate. Iure,
            fugiat sit. Repellat ipsa provident pariatur atque deserunt nam odio
            officiis maxime, possimus asperiores!
          </p>
          {/* <img
            className={styles.customerItem__brandImage}
            src={imagen_empresa}
            alt={empresa}
          /> */}
          <p className={styles.customerItem__brandTitle}>{empresa}</p>
          {/* <p className={styles.customerItem__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quae consectetur necessitatibus eveniet sequi cupiditate. Iure,
            fugiat sit. Repellat ipsa provident pariatur atque deserunt nam odio
            officiis maxime, possimus asperiores!
          </p> */}
        </div>
      </article>
    </>
  );
};

export default CustomerItem;
