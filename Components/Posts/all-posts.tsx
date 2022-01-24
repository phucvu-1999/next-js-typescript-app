import React from "react";

import styles from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

<<<<<<< HEAD
import { MarkDownData } from "../../Interfaces";

interface AllPostsProps {
  posts: MarkDownData[];
=======
import { PostItemProps } from "../../Interfaces";

interface AllPostsProps {
  posts: PostItemProps[];
>>>>>>> 64a01f9a36f0119d348b2a3e0afdbdbd66fb09b5
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
