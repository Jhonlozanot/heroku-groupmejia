import React from "react";
import { useRouter } from "next/router";
import "isomorphic-fetch";
import Layout from "../../components/layout";
import NoticiaItem from "../../components/noticiaItem/noticiaItem";

const Noticia = ({ data }) => {
  const {
    query: { id },
  } = useRouter();

  const noticia = data.result;
  const otras = data.other_news;

  return (
    <Layout title="hola" icon="../static/icon.ico">
      <NoticiaItem noticia={noticia} otras={otras} />
    </Layout>
  );
};

Noticia.getInitialProps = async ({ query: { id } }) => {
  const response = await fetch(
    `https://backend-grupo-mejia.herokuapp.com/api/news/${id}`
  );

  const data = await response.json();

  return { data: data };
};

export default Noticia;
