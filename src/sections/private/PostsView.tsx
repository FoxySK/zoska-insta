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
          <Grid item xs={12} key={post.id}> {/* Adjust grid to be responsive */}
            <Card
              sx={{
                transition: "transform 0.3s, box-shadow 0.3s",  // Transition effect
                "&:hover": {
                  transform: "scale(1.05)",  // Slightly scale up the card
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",  // Add a subtle shadow
                },
              }}
            >
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
