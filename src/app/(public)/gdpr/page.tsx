// src/app/(public)/gdpr/ClientGDPR.tsx

'use client';

import { Container, Typography, Box, Button } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { useRouter } from 'next/navigation';

export default function ClientGDPR() {
  const router = useRouter();

  return (
    <Container sx={{ mt: 4, mb: 8 }}>
      {/* Title Section */}
      <Typography variant="h3" align="center" sx={{ mb: 3 }}>
        Ochrana súkromia a GDPR
      </Typography>

      {/* Introduction */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Čo je GDPR?
      </Typography>
      <Typography variant="body1" paragraph>
        Všeobecné nariadenie o ochrane údajov (GDPR) je nariadenie v práve EÚ,
        ktorým sa chránia súkromie a osobné údaje všetkých jednotlivcov v rámci
        Európskej únie. Umožňuje jednotlivcom väčšiu kontrolu nad ich osobnými
        údajmi a cieľom je zjednodušiť regulačné prostredie pre medzinárodný
        obchod zjednotením regulácie v rámci EÚ.
      </Typography>

      {/* Data Collection */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Aké údaje zbierame?
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1">
          Na ZoškaSnap zbierame nasledujúce typy údajov:
        </Typography>
        <ul>
          <li>Osobné informácie ako meno, e-mailová adresa a užívateľské meno.</li>
          <li>Údaje o používaní, vrátane informácií o tom, ako používate našu platformu (napr. príspevky, interakcie).</li>
          <li>Cookies a sledovacie údaje na zlepšenie vašich skúseností a poskytovanie relevantného obsahu.</li>
        </ul>
      </Box>

      {/* How We Use Your Data */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Ako používame vaše údaje
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1">
          Vaše údaje používame na:
        </Typography>
        <ul>
          <li>Poskytovanie a zlepšovanie našich služieb.</li>
          <li>Personalizovanie vašich skúseností a ponúkanie relevantného obsahu.</li>
          <li>Komunikáciu s vami, napríklad zasielanie aktualizácií a dôležitých informácií.</li>
        </ul>
      </Box>

      {/* Your Rights */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Vaše práva podľa GDPR
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1">
          Podľa GDPR máte nasledujúce práva týkajúce sa vašich osobných údajov:
        </Typography>
        <ul>
          <li><strong>Prístup:</strong> Môžete požiadať o kópiu osobných údajov, ktoré o vás máme.</li>
          <li><strong>Oprava:</strong> Môžete požiadať o opravu nepresných alebo neúplných údajov.</li>
          <li><strong>Vymazanie:</strong> Môžete požiadať, aby sme vymazali vaše osobné údaje (známe aj ako „právo na zabudnutie“).</li>
          <li><strong>Námietka:</strong> Môžete namietať proti spracovaniu vašich osobných údajov v určitých prípadoch.</li>
          <li><strong>Prenosnosť:</strong> Môžete požiadať o prenos vašich údajov do inej služby.</li>
        </ul>
      </Box>

      {/* Contact Information */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Kontaktujte nás
      </Typography>
      <Typography variant="body1" paragraph>
        Ak máte akékoľvek otázky alebo požiadavky týkajúce sa vašich údajov alebo tejto GDPR politiky, môžete nás kontaktovať na:
      </Typography>

      {/* Email Link */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 5 }}>
        <MailIcon sx={{ mr: 1 }} />
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          support@zoskasnap.com
        </Typography>
      </Box>

      {/* Back Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 15 }}>
        <Button
          variant="contained"
          onClick={() => router.back()}
          sx={{
            backgroundColor: '#1976d2',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        >
          Späť
        </Button>
      </Box>
    </Container>
  );
}
