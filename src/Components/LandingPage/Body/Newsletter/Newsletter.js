import NewsletterCard from "./NewsletterCard/NewsletterCard";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styles } from "./styles";

export default function Newsletter() {
  return (
    <Box sx={styles.newsletterContainer}>
      <Box sx={styles.flavorText}>
        <Typography sx={styles.titleText}>Some pieces of the newsletter</Typography>
        <Typography>
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus,
          tellus, eros consequat magna semper orci a tincidunt.
        </Typography>
        <Button sx={styles.button} variant="contained">
          Read blog
        </Button>
      </Box>

      <Grid container spacing={3} sx={styles.cardsSection}>
        <Grid item xs={6}>
          <NewsletterCard badgeColor="#c6f8be" badgeText="Photography">
            10 Presets for Lightroom
          </NewsletterCard>
        </Grid>
        <Grid item xs={6}>
          <NewsletterCard badgeColor="#c6f8be" badgeText="Photography">
            10 Presets for Lightroom
          </NewsletterCard>
        </Grid>
        <Grid item xs={6}>
          <NewsletterCard badgeColor="#c6f8be" badgeText="Photography">
            10 Presets for Lightroom
          </NewsletterCard>
        </Grid>
        <Grid item xs={6}>
          <NewsletterCard badgeColor="#c6f8be" badgeText="Photography">
            10 Presets for Lightroom
          </NewsletterCard>
        </Grid>
        <Grid item xs={6}>
          <NewsletterCard badgeColor="#c6f8be" badgeText="Photography">
            10 Presets for Lightroom
          </NewsletterCard>
        </Grid>
        <Grid item xs={6}>
          <NewsletterCard badgeColor="#c6f8be" badgeText="Photography">
            10 Presets for Lightroom
          </NewsletterCard>
        </Grid>
      </Grid>
    </Box>
  );
}
