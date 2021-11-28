import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import CustomerItem from "../customer-item/customerItem";

import "swiper/swiper-bundle.css";
import styles from "./customer.module.css";

// Assets temporales, estas imágenes deberían venir de la API
const customerImage = "/static/png/customer.png";
const customerImageLogo = "/static/png/customer-logo.png";

SwiperCore.use([Pagination]);

const Customer = (props) => {
  // Este array debería ser un useState
  const customersData = props.data.data.result;

  return (
    <>
      <section className={styles.customer__container}>
        <h3 className={styles.customer__title}>Nos respaldan</h3>
        <Swiper
          id="main"
          tag="section"
          className={styles.customer__swiperContainer}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              spaceBetween: 20,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            1300: {
              spaceBetween: 40,
              slidesPerView: 3,
            },
          }}
        >
          {customersData.map((customer, index) => (
            <SwiperSlide
              key={`${customer.nombre}-${index}}`}
              className={styles.customer__swiperItem}
            >
              <CustomerItem {...customer} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Customer;
