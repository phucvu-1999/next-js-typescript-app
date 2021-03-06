import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./post-item.module.css";

<<<<<<< HEAD
import { MarkDownData } from "../../Interfaces";

interface PostItem {
  post: MarkDownData;
=======
import { PostItemProps } from "../../Interfaces";

interface PostItem {
  post: PostItemProps;
>>>>>>> 64a01f9a36f0119d348b2a3e0afdbdbd66fb09b5
}

const PostItem: React.FC<PostItem> = ({ post }) => {
  const { title, excerpt, image, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={styles.post}>
      <Link href={linkPath}>
        <a>
          <div className={styles.image}>
            <Image
              src={imagePath}
              alt={slug}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
