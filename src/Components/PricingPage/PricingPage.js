import { Box, Typography, Switch, Button } from "@mui/material";
import PricingCard from "./PricingCard/PricingCard";
import styles from "./styles";
import faqs from "./faqs.js";
import { FaReact } from "react-icons/fa";

export default function PricingPage() {
  const points = [
    [
      "Access to all basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
    [
      "200+ integrations",
      "Advanced reporting and analytics",
      "Up to 20 individual users",
      "40GB individual data each user",
      "Priority chat and email support",
    ],
    [
      "Advanced custom fields",
      "Audit log and data history",
      "Unlimited individual users",
      "Unlimited individual data",
      "Personalised+priotity service",
    ],
  ];

  const items = faqs.map((faq, index) => {
    return (
      <Box sx={styles.faqItem}>
        <FaReact />
        <Typography sx={styles.faqItemQuestion}>{faq.question}</Typography>
        <Typography sx={styles.faqItemBody}>{faq.body}</Typography>
      </Box>
    );
  });

  return (
    <div>
      <Box sx={styles.pricingHeading}>
        <Box sx={styles.badge}>
          <Typography sx={styles.badgeText}>Pricing plans</Typography>
        </Box>
        <Typography sx={styles.pricingHeadingTitle}>Plans for all sizes</Typography>
        <Typography sx={styles.pricingHeadingDesc}>
          Simple, transparent pricing that grows with you. Try any plan free for 30 days.
        </Typography>
        <Box sx={styles.discounts}>
          <Switch defaultChecked color="default" disabled />
          <Typography sx={styles.pricingHeadingDisc}>Annual pricing (save 20%)</Typography>
        </Box>
      </Box>
      <Box sx={styles.backgroundPattern}>
        <Box sx={styles.cards}>
          <PricingCard plan="Basic plan" points={points[0]} />
          <PricingCard plan="Business plan" points={points[1]} />
          <PricingCard plan="Enterprise plan" points={points[2]} />
        </Box>
      </Box>

      <Box sx={styles.faq}>
        <Box sx={styles.faqHeading}>
          <Typography sx={styles.faqTitle}>Frequently Asked Questions</Typography>
          <Typography sx={styles.faqMission}>Everything you need to know about this product and billing</Typography>
        </Box>
        <Box sx={styles.faqItems}>{items}</Box>
      </Box>

      <Box sx={styles.demoHeading}>
        <Typography sx={styles.demoHeadingTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus nulla tellus.
        </Typography>
        <Typography sx={styles.demoHeadingDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pretium magna lorem.
        </Typography>
        <Button variant="contained" sx={styles.demoButton}>
          <Typography sx={styles.demoButtonText}>Request a demo</Typography>
        </Button>
      </Box>
    </div>
  );
}
