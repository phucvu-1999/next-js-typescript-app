import React from "react";

import PostItem from "./post-item";
import styles from "./posts-grid.module.css";

<<<<<<< HEAD
import { MarkDownData } from "../../Interfaces";

interface PostsGridProps {
  posts: MarkDownData[];
=======
import { PostItemProps } from "../../Interfaces";

interface PostsGridProps {
  posts: PostItemProps[];
>>>>>>> 64a01f9a36f0119d348b2a3e0afdbdbd66fb09b5
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
