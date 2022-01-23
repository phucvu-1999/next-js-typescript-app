import matter from "gray-matter";

import fs from "fs";
import path from "path";

import { MarkDownData } from "../Interfaces";

const postDir = path.join(process.cwd(), "posts");

export function getPostsFile() {
  return fs.readdirSync(postDir);
}

export function getPostData(postIdentifier: string) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content }: { data: MarkDownData; content: string } =
    matter(fileContent);

  const postData = {
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFile();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  return allPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
