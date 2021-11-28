import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import "isomorphic-fetch";
import Person from "../components/person/person";
import Footer from "../components/footer/footer";
import BannerStaff from "../components/bannerStaff/banner-staff";

const Team = (data) => {
  const team = data.data.result;
  const filtro = [];
  const nombres = [];

  for (let persona of team) {
    nombres.push(persona.nombre);
  }

  const [searchStaff, setSearchStaff] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    const resultados = nombres.filter((nombre) =>
      nombre.toLowerCase().includes(searchStaff.toLowerCase())
    );
    setSearchResult(resultados);

    for (let persona of team) {
      for (let resultado of resultados) {
        if (resultado == persona.nombre) {
          filtro.push(persona);
        }
      }
    }

    setStaff(filtro);
  }, [searchStaff]);

  const search = (e) => {
    setSearchStaff(e.target.value);
  };

  return (
    <Layout title="Staff" icon="static/icon.ico">
      <BannerStaff />
      <div className="buscador">
        <form className="form">
          <input
            type="text"
            id="nombre"
            placeholder="Buscar miembro del staff"
            value={searchStaff}
            onChange={search}
          />
        </form>
      </div>
      <div className="container">
        <div className="titulo">NUESTRO STAFF</div>
        <div className="team-box">
          {

            staff.map((staff, index) =>{ return index > 1 ? 
                        (<Person  key={index} persona={staff}></Person>):null
                      })}
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .buscador {
          width: 100%;
          height: 6rem;
          background-color: #071845;
          position: relative;
        }

        .form{
          position absolute;
          height: 40%;
          right: 8rem;
          top: 1.8rem;
          width: 25rem;
          display:  flex;
        }

        .form input{
          width:100%;
          height: 100%;
          margin: 0;
          background-color: #fafafa;
          border-radius: 5px 5px 5px 5px;
          padding-left: 1rem;
        }
        

        .container {
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 5rem;
        }
        
        .titulo {
          background-color: #3c3c3c;
          color: white;
          font-size: 25px;
          margin: 1rem auto 3rem 5rem;
          padding: 0.2rem 8rem 0 2rem;
          width: 20rem;
          height: 5rem;
          text-align: left;
          font-weight: bold;
        }

        .team-box {
          padding: 0;
          display: grid;
          grid-template-columns: auto auto auto;
        }

        @media (max-width: 768px) {
          .container {
            margin-bottom: 0;
          }
          .titulo {
            background-color: #3c3c3c;
            color: white;
            font-size: 20px;
            margin: 1rem auto 0 auto;
            padding: 0.5rem;
            height: 3rem;
          }

          .team-box {
            padding: 0;
            margin: 0.5rem auto 1.5rem auto;
            grid-template-columns: auto;
          }

          .form{
            height: 40%;
            width: 21rem;
            left: .5rem;
            right: auto;
            display:  flex;
            margin: 0 auto;
          }

        }
      `}</style>
    </Layout>
  );
};

Team.getInitialProps = async () => {
  const response = await fetch(
    "https://backend-grupo-mejia.herokuapp.com/api/staff"
  );

  const body = await response.json();

  return { data: body };
};

export default Team;
