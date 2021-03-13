import { motion } from "framer-motion";
import styles from "./SignupForm.module.css";
const Animator = ({ children }) => {
  return (
    <motion.div
      className={styles.form_container}
      initial={{ x: 200, scale: 0.8, opacity: 0, display: "none" }}
      animate={{ x: 0, scale: 1, opacity: 1, display: "block" }}
      exit={{ x: -200, scale: 0.8, opacity: 0, display: "none" }}
    >
      {children}
    </motion.div>
  );
};
export default Animator;
