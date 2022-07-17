import API from "./API";
import Careers from "./Careers";
import Documentation from "./Documentation";

const developerPages = [
  { path: "/documentation", element: <Documentation /> },
  { path: "/api", element: <API /> },
  { path: "/careers", element: <Careers /> },
];

export default developerPages;
