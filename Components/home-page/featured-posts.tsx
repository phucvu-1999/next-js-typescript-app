import React from "react";

import styles from "./featured-posts.module.css";
import { MarkDownData } from "../../Interfaces";
import PostsGrid from "../Posts/posts-grid";

interface FeaturedPostsProps {
  posts: MarkDownData[];
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
