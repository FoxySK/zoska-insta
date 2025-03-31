// src/app/prispevok/[prispevokId]/komentar/page.tsx
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const metadata = { title: "Zoznam komentárov | ZoškaSnap" };

export default function PostCommentsList() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data); // Placeholder for handling form data
  };

  return (
    <div>
      <Typography> Zoznam komentárov </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("comment")}
          label="Add Comment"
          multiline
          rows={4}
          sx={{ width: "100%" }}
        />
        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
          Post Comment
        </Button>
      </form>
      {/* Placeholder for rendering comments */}
      <div>
        <Typography>Comments:</Typography>
        {/* You can render comments here */}
      </div>
    </div>
  );
}
