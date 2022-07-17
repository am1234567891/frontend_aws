import CustomerSupport from "./CustomerSupport";
import FAQ from "./FAQ";
import Resources from "./Resources";
import Zendesk from "./Zendesk";

const supportPage = [
  { path: "/customer-support", element: <CustomerSupport /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/resources", element: <Resources /> },
  { path: "/zendesk", element: <Zendesk /> },
];

export default supportPage;
