import DropDownPages from "./Components/DropDownPages";
import FooterPages from "./Components/FooterPages";
import LandingPage from "./Components/LandingPage/LandingPage";
import pricingRoutes from "./Components/PricingPage";

const homePage = { path: "/", element: <LandingPage /> };
const landingRoutes = [homePage, DropDownPages, FooterPages, pricingRoutes];

export default landingRoutes.flat();
