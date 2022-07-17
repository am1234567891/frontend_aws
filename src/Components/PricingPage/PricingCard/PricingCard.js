import { Box, Typography, List, ListItem, Button } from "@mui/material";
import styles from "./styles";

export default function PricingCard({ plan, points }) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.bullet} />
      <Typography sx={styles.pricePlan}>{plan}</Typography>
      <Typography sx={styles.billTime}>Billed annually.</Typography>
      <List style={styles.list}>
        {points.map((item, index) => (
          <ListItem sx={styles.listItems} key={index}>
            <Box sx={styles.bullet} />
            {item}
          </ListItem>
        ))}
      </List>
      <Button variant="contained" sx={styles.button}>
        Request a demo
      </Button>
    </Box>
  );
}
