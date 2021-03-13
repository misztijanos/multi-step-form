import { useSignupContext } from "./SignupContext";

import Animator from "./Animator";
import styles from "./SignupForm.module.css";

const ReviewForm = () => {
  const { profile, social } = useSignupContext();
  const upload = () =>
    alert(
      "Great Success!! Thank you for trying my app. This is a user interface and state management demo project, so your data won't be stored externally, or transmitted over the web."
    );
  return (
    <Animator>
      <p className={styles.review}>
        <strong>Name:</strong> {profile.name}
      </p>
      <p className={styles.review}>
        <strong>Email:</strong> {profile.email}
      </p>
      <p className={styles.review}>
        <strong>Twitter:</strong> {social.twitter}
      </p>
      <p className={styles.review}>
        <strong>Facebook:</strong> {social.facebook}
      </p>
      <input
        className={styles.button}
        type="submit"
        value="Submit"
        onClick={upload}
      />
    </Animator>
  );
};
export default ReviewForm;
