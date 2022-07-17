import BlogPages from "./BlogPages";
import PricingPages from "./PricingPages";
import ProductPages from "./ProductPages";
import SolutionPages from "./SolutionPages";

const dropDownPages = [PricingPages, ProductPages, SolutionPages, BlogPages];

export default dropDownPages.flat();
