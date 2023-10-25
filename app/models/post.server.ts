import { Post } from "@prisma/client";
import { prisma } from "~/db.server";

export const createPost = (
  post: Pick<Post, "title" | "content" | "authorId">
) => {
  return prisma.post.create({
    data: post,
  });
};
