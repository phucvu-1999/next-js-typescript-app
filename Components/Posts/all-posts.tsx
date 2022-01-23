import React from "react";

import styles from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

import { MarkDownData } from "../../Interfaces";

interface AllPostsProps {
  posts: MarkDownData[];
}

const AllPosts: React.FC<AllPostsProps> = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;