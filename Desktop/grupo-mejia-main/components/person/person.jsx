import Link from "next/link";
import React from "react";
import styles from "./person.module.css";

const Person = ({ persona }) => {
  return (
    <div className={styles.card}>
      <a href={`/person/${persona.id}`}>
        <img
          src={persona.foto}
          className={styles.card_img_top}
          alt={persona.nombre}
        />
        <div className={styles.card_body}>
          <h5 className={styles.card_title}>{persona.nombre}</h5>
          <p>{`${persona.description.substring(0, 250)} ...`}</p>
          <h6 className={styles.card_subtitle}>{persona.cargo} </h6>
        </div>
      </a>
    </div>
  );
};

export default Person;
