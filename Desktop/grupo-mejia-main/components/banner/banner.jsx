import React from "react";
import styles from "./banner.module.css";

function Banner(props) {
  return (
    <section className={styles.banner}>
      <video
        className={styles.video}
        src="static/video/intro.webm"
        poster="static/png/ciudad-contacto.png"
        type="video/mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <h1 className={styles.bannerText}>{props.text}</h1>
    </section>
  );
}

export default Banner;
