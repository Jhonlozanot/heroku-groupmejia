import React from "react";
import Layout from "../components/layout";
import Contacto from "../components/contact/contact";
import Footer from "../components/footer/footer";
const Contact = () => {
  return (
    <Layout title="Contacto" icon="static/icon.ico">
      <Contacto />
      <Footer />
    </Layout>
  );
};

export default Contact;
