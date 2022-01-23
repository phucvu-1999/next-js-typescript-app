import React from "react";

import PostItem from "./post-item";
import styles from "./posts-grid.module.css";

import { MarkDownData } from "../../Interfaces";

interface PostsGridProps {
  posts: MarkDownData[];
}

const PostsGrid: React.FC<PostsGridProps> = ({ posts }) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </ul>
  );
};

export default PostsGrid;
