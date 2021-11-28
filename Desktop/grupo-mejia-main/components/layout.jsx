import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Logo = "/static/png/logo.png";

const Layout = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, toggleNav] = useState(false);
  const Item = styled.li``;

  const Overlay = styled.div`
    height: ${(props) => (props.open ? "90vh" : 0)};
    width: 100vw;
    background: #fff;
    text-align: center;

    @media (min-width: 769px) {
      display: none;
    }
  `;

  const OverlayMenu = styled.ul`
    list-style: none;
    position: absolute;
    text-align: center;
    width: 100%;
    padding: 0;
    ${Item} {
      opacity: ${(props) => (props.open ? 1 : 0)};
      margin: 15%;
    }

    ${Item} a {
      text-decoration: none;
      font-size: 20px;
      font-weight: normal;
      color: black;
    }
  `;

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 850);
  }, []);

  return (
    <>
      <Head>
        <title>{props.title} | Grupo Mejía </title>
        <meta charSet="utf-8" />
        <meta lang="es" />
        <link rel="shortcut icon" href={props.icon}></link>
      </Head>
      <menu className="menu-nav">
        <a href="/" className="logo">
          <img src={Logo} alt="Grupo Mejía" />
        </a>

        <div className="links">
          <Link href="/">Inicio</Link>
          <Link href="/about">Nosotros</Link>
          <Link href="/news">Noticias</Link>
          <Link href="/contact">Contacto</Link>
        </div>

        <button onClick={() => toggleNav(!toggle)}>
          <span open={toggle} />
          <span open={toggle} />
          <span open={toggle} />
        </button>
      </menu>

      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link href="/">Inicio</Link>
          </Item>
          <Item>
            <Link href="/about">Nosotros</Link>
          </Item>
          <Item>
            <Link href="/news">Noticias</Link>
          </Item>
          <Item>
            <Link href="/contact">Contacto</Link>
          </Item>
        </OverlayMenu>
      </Overlay>
      <main className="animated fadeIn">{props.children}</main>
    </>
  );
};

export default Layout;
