import LoginForm from "./LoginForm/LoginForm";
import { motion } from "framer-motion";
//import SignupForm from "./SignupForm/SignupForm";
import "./Login.css";

export default function Login() {
  window.scrollTo(0, 0);
  return (
    <div className="login-container">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <LoginForm />
      </motion.div>
    </div>
  );
}
