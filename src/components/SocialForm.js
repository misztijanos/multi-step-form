import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignupContext } from "./SignupContext";
import styles from "./SignupForm.module.css";

const SocialForm = () => {
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();
  const { social, setSocial } = useSignupContext();

  const onSubmit = (data) => {
    setSocial(data);
    history.push("./review");
  };

  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1>Add your social media</h1>
        <input
          type="text"
          name="twitter"
          placeholder="What's your Twitter?"
          value={social.twitter}
          ref={register({ required: true })}
        />
        <p className={styles.error}>
          {errors.twitter && "Your Twitter is required"}
        </p>
        <input
          type="text"
          name="facebook"
          placeholder="What's your Facebook?"
          value={social.facebook}
          ref={register({ required: true })}
        />
        <p className={styles.error}>
          {errors.facebook && "Your Facebook is required"}
        </p>
        <input className={styles.button} type="submit" value="Next" />
      </form>
    </div>
  );
};
export default SocialForm;
