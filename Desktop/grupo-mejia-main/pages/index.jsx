import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Banner from "../components/banner/banner";
import Container from "../components/containerIndex/containerIndex";
import CompanyPmv from "../components/company-pmv/company-pmv";
import CompanyInfo from "../components/company-info/company-info";
import Companies from "../components/companies/companies";
import Staff from "../components/staff/staff";
import Footer from "../components/footer/footer";
import Customer from "../components/customer/customer";
import Image from "next/image";

import "isomorphic-fetch";

const Loading = "/static/gif/loader.gif";

const Home = (data) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <Head>
            <title> Grupo Mejía </title>
            <meta charSet="utf-8" />
            <meta lang="es" />
            <link rel="shortcut icon" href="static/icon.ico"></link>
          </Head>
          <div className="carga">
            <img className="carga-img" src={Loading} />
          </div>
        </>
      ) : (
        <Layout title="Inicio" icon="static/icon.ico">
          <Banner image="ciudad.png" text=" Más de 30 años de experiencia " />
          {/* <ImagenFondoIndex /> */}
          <Container>
            <CompanyPmv />
            <CompanyInfo />
            <Companies />
            <Staff />
          </Container>
          <Footer />
        </Layout>
      )}
    </>
  );
};

Home.getInitialProps = async () => {
  const response = await fetch(
    "https://backend-grupo-mejia.herokuapp.com/api/asociado"
  );

  const body = await response.json();

  return { data: body };
};

export default Home;
