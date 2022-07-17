import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BsArrowRightCircle } from "react-icons/bs";
import { styles } from "./styles";

export default function NewsletterCard({ badgeColor, badgeText, children }) {
  return (
    <Card sx={styles.cardContainer}>
      <CardContent sx={styles.cardContents}>
        <Box sx={[styles.badge, { backgroundColor: badgeColor }]}>
          <Typography sx={styles.badgeText}>{badgeText}</Typography>
        </Box>
        <Typography sx={styles.titleText}>{children}</Typography>
        <CardActions sx={styles.actions}>
          <Button sx={styles.button}>
            Read more
            <BsArrowRightCircle />
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
