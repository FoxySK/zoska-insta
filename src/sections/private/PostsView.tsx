// src/sections/private/PostsView.tsx
"use client";

import { FC } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ThumbUp, ThumbUpOffAlt } from "@mui/icons-material";
import ChatIcon from '@mui/icons-material/Chat';
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";

interface Post {
  id: string;
  userId: string;
  imageUrl: string;
  caption?: string | null;
  createdAt: Date;
  updatedAt: Date;
  user: {
    name: string | null;
  };
  comments: any[];
  likes: any[];
}

interface PostsViewProps {
  posts: Post[];
}

const PostsView: FC<PostsViewProps> = ({ posts }) => {
  const [optimisticPosts, setOptimisticPosts] = useState(posts);

  useEffect(() => {
    setOptimisticPosts(posts);
  }, [posts]);

  const handleLike = async (postId: string, userId: string) => {
    // Optimistic update
    setOptimisticPosts(prev => prev.map(post => 
      post.id === postId ? {
        ...post,
        likes: post.likes.some(l => l.userId === userId) 
          ? post.likes.filter(l => l.userId !== userId)
          : [...post.likes, { id: Date.now().toString(), userId }]
      } : post
    ));

    // Server action via Fetch API
    try {
      const response = await fetch('/api/toggleLike', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postId, userId }),
      });

      if (!response.ok) {
        // Handle failure here, e.g., revert optimistic update
        console.error("Failed to toggle like");
        setOptimisticPosts(prev => prev.map(post => 
          post.id === postId ? {
            ...post,
            likes: post.likes.some(l => l.userId === userId) 
              ? [...post.likes, { id: Date.now().toString(), userId }]
              : post.likes.filter(l => l.userId !== userId)
          } : post
        ));
      }
    } catch (error) {
      console.error("Error toggling like:", error);
      // Handle failure here, e.g., revert optimistic update
      setOptimisticPosts(prev => prev.map(post => 
        post.id === postId ? {
          ...post,
          likes: post.likes.some(l => l.userId === userId) 
            ? [...post.likes, { id: Date.now().toString(), userId }]
            : post.likes.filter(l => l.userId !== userId)
        } : post
      ));
    }
  };

  return (
    <Container sx={{ mt: 4, maxWidth: "800px", mx: "auto" }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Príspevky
      </Typography>
      {optimisticPosts.map((post) => (
        <Card
          key={post.id}
          sx={{
            mb: 2,
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={post.imageUrl}
            alt={post.caption || "Príspevok bez popisu"}
          />
          <CardContent>
            <Typography variant="body1">{post.caption || "Bez popisu"}</Typography>
            <Typography variant="body2" color="text.secondary">
              {post.user.name || "Neznámy používateľ"}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Button 
                variant={post.likes.some(l => l.userId === "current-user-id") ? 'contained' : 'outlined'}
                onClick={() => handleLike(post.id, "current-user-id")}
              >
                {post.likes.some(l => l.userId === "current-user-id") ? <ThumbUpOffAlt /> : <ThumbUp />}
              </Button>
              <Typography variant="body2" sx={{ mr: 1 }}>
                {post.likes.length}
              </Typography>
              <Button variant="outlined" sx={{ mr: 1 }}>
                <ChatIcon />
              </Button>
              <Typography variant="body2">
                {post.comments.length}
              </Typography>
            </Box>
            <TextField
              label="Add a comment"
              multiline
              rows={2}
              sx={{ width: "100%" }}
            />
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default PostsView;
