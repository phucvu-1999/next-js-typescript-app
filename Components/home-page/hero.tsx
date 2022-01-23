import React from "react";

import Image from "next/image";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          alt="Tien Phuc"
          src="/images/site/avatar.png"
          width={300}
          height={300}
        />
      </div>
      <h1>Tien Phuc Blog</h1>
      <p>This is my first project builded by Next.js framework !!!</p>
      <p>
        In this project, i learned a lot of features of Next famework, and i
        also apply it to this project.
      </p>
      <p>
        Those features are: file-based routing, pre-render pages,
        getStaticProps, getStaticPaths, getServersideProps, API routes, ...
      </p>
    </section>
  );
};

export default Hero;
