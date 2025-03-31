// src/app/prispevok/page.tsx
import PostsView from "@/sections/private/PostsView";
import { fetchPosts } from "@/app/actions/posts";

export const metadata = { title: "Zoznam prispevkov | ZoškaSnap" };

export default async function PostsList() {
  const posts = await fetchPosts();

  return <PostsView posts={posts} />;
}
