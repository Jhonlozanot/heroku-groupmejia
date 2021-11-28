import React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer/footer";
import Noticias from "../components/noticias/noticias";

const News = (data) => {
  console.log(data);
  return (
    <Layout title="Noticias" icon="static/icon.ico">
      <Noticias data={data} />
      <Footer />
    </Layout>
  );
};

News.getInitialProps = async () => {
  const response = await fetch(
    "https://backend-grupo-mejia.herokuapp.com/api/news"
  );

  const body = await response.json();

  return { data: body };
};

export default News;
