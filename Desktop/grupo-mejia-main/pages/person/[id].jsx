import React from "react";
import { useRouter } from "next/router";
import "isomorphic-fetch";
import Footer from "../../components/footer/footer";
import Layout from "../../components/layout";

const Persona = ({ data }) => {
  const {
    query: { id },
  } = useRouter();

  const router = useRouter();

  const persona = data.result[0];

  return (
    <Layout title={persona.nombre} icon="../static/icon.ico">
      <div className="caja">
        <div className="boton" onClick={() => router.back()}>
          <img src="/static/png/atras.png" alt="principal" />
        </div>
      </div>
      <div className="container">
        <div className="image">
          <img src={persona.foto} alt={persona.nombre}></img>
        </div>
        <div className="persona asd">
          <div className="nombre">
            <h3> {persona.nombre} </h3>
          </div>
          <div className="desc">
            <p>{persona.description}</p>
          </div>
          <div className="logo">
            <img src="/static/png/logo.png" alt="" width="100%" />
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .caja {
          width: 100%;
          padding: 2.1% 0 0 75%;
        }

        .footer_footer__1pkyR{
          margin-top:250px;
        }

        .boton {
          height: 4rem;
          width: 4rem;
          padding: 0.8rem;
          border-radius: 50%;
          background-color: #3c3c3c;
          cursor: pointer;
        }

        .boton img {
          width: 100%;
        }

        .container {
          display: flex;
          padding: 2rem 10rem;
          height: 100%;
        }

        .container .persona {
          box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
          padding: 5% 0 0 0;
          width: 50%;
        }

        .container .image {
          width: 50%;
          margin-right: 5rem;
        }

        .container .image img {
          width: 100%;
          height: 100%;
        }

        .nombre {
          background-color: #071845;
          width: 50%;
          color: white;
          padding: 1% 4% 1% 4%;
        }

        .nombre h3 {
          padding-top: 5%;
          font-size: 25px;
          font-weight: bold;
        }

        .container .persona {
          padding: 3rem 0;
          position: relative;
          margin-bottom:auto;
        }

        .persona .desc {
          margin: 10% 15%;
          height: auto;
          text-align: justify;
          color: #3c3c3c;
        }

        .desc p {
          font-size: 16px;
          margin: 0;
        }

        .logo {
          width: 20%;
          right: 1rem;
          bottom: 0.5rem;
          position: absolute;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            padding: 0;
            height: auto;
            margin: 0;
          }

          .container .image {
            width: 100%;
            height: 50%;
            margin: 0;
          }

          .container .image img {
            width: 100%;
            height: 100%;
          }

          .container .persona {
            width: 100%;
            height: 50%;
            padding: 8%;
          }
          .asd{
          margin: auto;
        }


          .persona .desc {
            margin: 1rem 0;
          }
          .persona {
            margin-bottom:auto;
          }

          .persona .nombre {
            background-color: #071845;
            width: 55%;
            color: white;
            padding-left: 5%;
            margin: 0;
          }
          .caja {
            display: none;
          }
        }
      `}</style>
    </Layout>
  );
};

Persona.getInitialProps = async ({ query: { id } }) => {
  const response = await fetch(
    `https://backend-grupo-mejia.herokuapp.com/api/staff/${id}`
  );

  const body = await response.json();

  return { data: body };
};

export default Persona;
