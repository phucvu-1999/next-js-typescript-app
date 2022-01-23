import React from "react";
import ReactMarkdown from "react-markdown";
import { NextPage } from "next";
import Image from "next/image";

import PostHeader from "./post-header";
import styles from "./post-content.module.css";
import { MarkDownData } from "../../../Interfaces";

interface PostContentProps {
  post: MarkDownData;
}

const PostContent: NextPage<PostContentProps> = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    p(paragraph: any) {
      const { node } = paragraph;
      if (node.children[0].tagName === "image") {
        const image = node.children[0];
        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={850}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown linkTarget="_blank" components={customRenderers}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
