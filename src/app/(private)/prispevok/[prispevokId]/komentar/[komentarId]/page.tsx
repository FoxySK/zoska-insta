// src/app/prispevok/[prispevokId]/komentar/[komentarId]/page.tsx
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export default function PostCommentDetail({
  params,

}: {
  params: {
    prispevokId: string;
    komentarId: string;
  };
}) {

  return (
    <Container>
      <Typography> Komentár číslo: {params.komentarId} prispevku číslo: {params.prispevokId} </Typography>
      <Typography> Príspevok číslo: {params.prispevokId} a k nemu priradený komentár číslo: {params.komentarId} </Typography>
      <Button variant="outlined">
        Like
      </Button>
    </Container>
  );
}
