import Register from "./Register/Register";
import Login from "./Login/Login";
import AccountType from "./AccountType/AccountType";
import ForgotPassword from "./ForgotPassword/ForgotPassword";

const registerRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgotpassword", element: <ForgotPassword /> },
  { path: "/register/account_type", element: <AccountType /> },
];

export default registerRoutes;
