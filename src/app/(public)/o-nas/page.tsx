import { Container, Typography, Box, Divider, Link } from "@mui/material";
import { GitHub, Twitter, Facebook, Instagram } from "@mui/icons-material";

export const metadata = { title: "O nás | ZoškaSnap" };

export default function AboutUs() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      {/* Logo Section */}
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <img
          src="https://zochova.sk/images/logo_2.png"
          alt="ZoškaSnap Logo"
          style={{ width: "200px", height: "auto" }} // You can adjust the width as needed
        />
      </Box>

      {/* About Us Text */}
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>
        O nás
      </Typography>
      <Typography variant="body1" paragraph>
      ZoškaSnap je platforma, ktorá spája ľudí prostredníctvom zaujímavých príspevkov a príbehov. Naším cieľom je spojiť ľudí a podporiť pocit komunity, všetko pri zdieľaní zmysluplného obsahu. Či už ste tu pre zábavu, inšpiráciu alebo spojenie, vítame vás, aby ste sa stali súčasťou skúsenosti ZoškaSnap.
      </Typography>
      <Typography variant="body1" paragraph>
      Našou misiou je vytvoriť bezpečný a inkluzívny priestor, kde môžu používatelia slobodne vyjadrovať seba a objavovať kreatívny obsah zo všetkých kútov sveta.
      </Typography>

      {/* Subtle Line Divider */}
      <Divider sx={{ my: 4 }} />

      {/* Social Media Links Section */}
      <Typography variant="h6" align="center" sx={{ mb: 2 }}>
        Sleduj nás
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Link
          href="https://github.com"
          target="_blank"
          color="inherit"
          sx={{
            "&:hover": {
              color: "#0C4FF7", // Hardcoded hover color to match theme
            },
          }}
        >
          <GitHub fontSize="large" />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          color="inherit"
          sx={{
            "&:hover": {
              color: "#0C4FF7", // Hardcoded hover color to match theme
            },
          }}
        >
          <Twitter fontSize="large" />
        </Link>
        <Link
          href="https://www.facebook.com/spsezochova/?locale=sk_SK"
          target="_blank"
          color="inherit"
          sx={{
            "&:hover": {
              color: "#0C4FF7", // Hardcoded hover color to match theme
            },
          }}
        >
          <Facebook fontSize="large" />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          color="inherit"
          sx={{
            "&:hover": {
              color: "#0C4FF7", // Hardcoded hover color to match theme
            },
          }}
        >
          <Instagram fontSize="large" />
        </Link>
      </Box>
    </Container>
  );
}
