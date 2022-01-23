import React from "react";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";

import Hero from "../Components/home-page/hero";
import FeaturedPosts from "../Components/home-page/featured-posts";
import { getFeaturedPosts } from "../helpers/posts-util";

import { MarkDownData } from "../Interfaces";

interface HomePageProps {
  posts: MarkDownData[];
}

const HomePage: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Tiến Phúc Page</title>
        <meta
          name="description"
          content="This is the blog about the technologies for Web Development"
        ></meta>
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
};

export default HomePage;
