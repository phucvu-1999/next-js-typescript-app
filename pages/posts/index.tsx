import React from "react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { getAllPosts } from "../../helpers/posts-util";
import AllPosts from "../../Components/Posts/all-posts";

import { MarkDownData } from "../../Interfaces";

interface PostPageProps {
  posts: MarkDownData[];
}

const PostsPage: NextPage<PostPageProps> = ({ posts }) => {
  return (
    <React.Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming tutorials and posts"
        ></meta>
      </Head>
      <AllPosts posts={posts} />;
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default PostsPage;
