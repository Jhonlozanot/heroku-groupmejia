import React from "react";
import Footer from "../footer/footer";
import style from "./noticiaItem.module.css";
const NoticiaItem = (props) => {
  const noticia = props.noticia;
  const otras = props.otras;
  console.log(otras);
  return (
    <>
      <div className={style.container}>
        <section className={style.noticia_main}>
          <img src={noticia.image} alt="" />
          <div className={style.box}>
            <div className={style.title}>
              <h2>{noticia.title}</h2>
              <p>{noticia.date}</p>
            </div>
            <div className={style.subtitle}>
              <p>{noticia.author}</p>
            </div>
            <div className={style.desc}>
              <p>{noticia.resume}</p>
            </div>
          </div>
        </section>

        <section className={style.noticias}>
          <div className={style.izquierdo}>
            <p>{noticia.description}</p>
            <p>{noticia.description}</p>
            <p>{noticia.description}</p>
          </div>
          <div className={style.derecho}>
            <h3>Otras Noticias</h3>
            {otras.map((noticia) => (
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
      <Footer />
      <style jsx>{`
       .noticia_main {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 70%;
        position: relative;
        margin-bottom: 5%;
      }
      .noticia_main img{
       width: 100%;
       max-height: 50rem;
      }
      .box {
        position: absolute;
        bottom: 35%;
      }
      
      .title {
        background-color: rgba(7, 18, 45, 0.8);
        color: white;
        padding: 2% 2% 0 10%;
      }
      
      .title h2 {
        font-weight: bold;
        font-style: normal;
        font-size: 60px;
      }
      
      .title p {
        font-style: normal;
        text-align: right;
        margin: 0;
      }
      
      .subtitle {
        background-color: #3c3c3c;
        color: white;
        padding-left: 10%;
        padding-top: 0.5%;
        vertical-align: middle;
      }
      
      .subtitle p {
        margin: 0;
      }
      
      .desc {
        background-color: #071845;
        padding: 2%;
      }
      
      .desc p {
        color: white;
        margin: 0;
        text-align: justify;
      }
      
      .noticias {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        width: 70%;
        height: auto;
        position: relative;
      }
      
      .izquierdo,
      .derecho {
        height: auto;
        display: flex;
        flex-direction: column;
      }
      
      .izquierdo {
        width: 70%;
      }
      
      .derecho {
        width: 30%;
        margin-left: 1rem;
      }
      
      .child_izquierdo {
        display: flex;
        background-color: white;
        margin-bottom: 5%;
        box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.2);
      }
      
      .child_izquierdo img {
        height: 15rem;
        width: 15rem;
      }
      
      .child_izquierdo .text {
        display: flex;
        flex-direction: column;
        padding: 4% 4% 0 4%;
      }
      
      .child_izquierdo .text h2 {
        font-weight: bold;
        font-size: 24px;
      }
      
      .child_izquierdo .text p {
        font-size: 16px;
        text-align: justify;
        margin: 0;
      }
      
      .child_izquierdo .option {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 3%;
      }
      
      .child_izquierdo .option p {
        font-weight: normal;
        font-size: 14px;
      }
      
      .child_izquierdo .option button {
        background-color: #171d35;
        color: white;
        font-weight: bold;
        font-size: 18px;
        padding: 0 5%;
      }
      
      .child_derecho {
        padding-left: 1rem;
        padding-right: 1rem;
        height: 10rem;
        width: 100%;
        margin-bottom: 10px;
        box-shadow: 0px 0.8rem 1.5rem rgb(0 0 0 / 25%);
      }
      
      .child_derecho p{
       margin: 0;
       padding: 1rem 0 0.2rem 0rem;
      }
      .child_derecho_content{
        display: flex;
       
      }
      .child_derecho_content img{
      height: 5rem;
      width: 5rem;
      }
      
      .child_derecho_content p{
       font-size: 0.8rem;
       padding-left: 1rem;
        }
      .linea {
        width: 100%;
        height: 2px;
        align-self: center;
        background-color: #5a5a5a;
        margin-bottom: 5px;
        padding: 0 1rem;
      }
      @media (min-width: 600px) and (max-width: 800px) {
        
      .noticias {
       flex-direction: column;
      }
      
      .izquierdo {
        width: 100%;
      }
      
      .derecho {
        width: 100%;
      }
      }
      @media (max-width: 600px) {
        .desc p {
         padding: 1rem;
        }
        .title h2 {
        
          font-size: 2rem;
        }
      
        .noticia_main {
        
          width: 100%;
         
        }
        .noticias {
          flex-direction: column;
          width: 90%;
         }
         
         .izquierdo {
           width: 100%;
         }
         
         .derecho {
           width: 100%;
         }
         .child_izquierdo {
        flex-direction: column;
        }
        .child_izquierdo img{
         width: 100%;
          }
          .child_izquierdo .text {
           
            padding: 1rem;
          }
          .child_derecho {
          
            margin-left:0;
            margin-bottom: 1rem;
            
          }
      }
        }
      `}</style>
    </>
  );
};

export default NoticiaItem;
