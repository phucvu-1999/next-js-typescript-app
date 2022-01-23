import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";

import PostContent from "../../Components/Posts/post-detail/post-content";
import { getPostData, getPostsFile } from "../../helpers/posts-util";

import { MarkDownData } from "../../Interfaces";

interface PostDetailPageProps {
  post: MarkDownData;
}

const PostDetailPage: NextPage<PostDetailPageProps> = ({ post }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt}></meta>
      </Head>
      <PostContent post={post} />;
    </React.Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const postsFilenames = getPostsFile();

  const slugs = postsFilenames.map((filename) => filename.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const slug = params!.slug as string;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export default PostDetailPage;
