// src/sections/private/PostsView.tsx
import { FC } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

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
}

interface PostsViewProps {
  posts: Post[];
}

const PostsView: FC<PostsViewProps> = ({ posts }) => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Príspevky
      </Typography>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={post.imageUrl}
                alt={post.caption || "Príspevok bez popisu"}
              />
              <CardContent>
                <Typography variant="body1">{post.caption || "Bez popisu"}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.user.name || "Neznámy používateľ"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PostsView;
