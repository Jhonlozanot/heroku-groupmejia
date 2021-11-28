import React from "react";
import style from "./noticias.module.css";

const historia = "/static/png/historia.png";

const Noticias = (props) => {
  const datos = props.data.data;
  const principal = datos.principal;
  const secondary = datos.secondary;
  const others = datos.other_news;
  return (
    <>
      <div className={style.container}>
        <section className={style.noticia_main}>
          <img src={principal.image} alt="" />
          <div className={style.noticia_principal}>
            <div className={style.title}>
              <h2>{principal.title}</h2>
              <p>{principal.data}</p>
            </div>
            <div className={style.subtitle}>
              <p>{principal.name}</p>
            </div>
            <div className={style.tag}>
              <p>{principal.tag}</p>
            </div>
          </div>
        </section>
        <section className={style.noticias}>
          <div className={style.izquierdo}>
            {secondary.map((noticia) => (
              <div className={style.child_izquierdo}>
                <img src={noticia.image} alt="" />
                <div className={style.text}>
                  <h2>{noticia.title}</h2>
                  <p>{noticia.tag}</p>
                  <div className={style.option}>
                    <p>{noticia.data}</p>
                    <a href={`/noticia/${noticia.id}`} className={style.boton}>
                      Leer más
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={style.derecho}>
            <h3>Otras Noticias</h3>
            {others.map((noticia) => (
              <div className={style.child_derecho}>
                <a href={`/noticia/${noticia.id}`}>
                  <p>{noticia.title}</p>
                </a>
                <div className={style.linea}></div>
                <div className={style.child_derecho_content}>
                  <img src={noticia.image} alt="" />
                  <p>{noticia.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Noticias;
