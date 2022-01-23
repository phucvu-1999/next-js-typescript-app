import React from "react";

import PostItem from "./post-item";
import styles from "./posts-grid.module.css";

import { PostItemProps } from "../../Interfaces";

interface PostsGridProps {
  posts: PostItemProps[];
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
