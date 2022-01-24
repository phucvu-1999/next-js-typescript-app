import React from "react";

import styles from "./featured-posts.module.css";
<<<<<<< HEAD
import { MarkDownData } from "../../Interfaces";
import PostsGrid from "../Posts/posts-grid";

interface FeaturedPostsProps {
  posts: MarkDownData[];
=======
import { PostItemProps } from "../../Interfaces";
import PostsGrid from "../Posts/posts-grid";

interface FeaturedPostsProps {
  posts: PostItemProps[];
>>>>>>> 64a01f9a36f0119d348b2a3e0afdbdbd66fb09b5
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ posts }) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
