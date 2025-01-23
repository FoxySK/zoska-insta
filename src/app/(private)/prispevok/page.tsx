

// src/app/prispevok/page.tsx
import PostsView from "@/sections/private/PostsView";
import Typography from "@mui/material/Typography";
import { fetchPosts } from "@/app/actions/posts";

export const metadata = { title: "Zoznam prispevkov | ZoškaSnap" };

// Mark this function as async to allow using await
export default async function PostsList() {
  // Now you can use await inside the async function
  const posts = await fetchPosts(); // Server-side fetching

  return (
    <>
      <Typography>Zoznam prispevkov</Typography>
      <PostsView posts={posts} /> {/* Pass posts as a prop */}
    </>
  );
}

