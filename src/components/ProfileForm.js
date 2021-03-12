import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignupContext } from "./SignupContext";
import styles from "./SignupForm.module.css";
const ProfileForm = () => {
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();
  const { profile, setProfile } = useSignupContext();

  const onSubmit = (data) => {
    setProfile(data);
    history.push("./social");
  };

  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1>Tell us about yourself</h1>
        <input
          type="text"
          name="name"
          placeholder="What's your name?"
          value={profile.name}
          ref={register({ required: true })}
        />
        <p className={styles.error}>{errors.name && "Your name is required"}</p>
        <input
          type="email"
          name="email"
          placeholder="What's your email?"
          value={profile.email}
          ref={register({
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <p className={styles.error}>
          {errors.email && "A valid email address is required"}
        </p>
        <input className={styles.button} type="submit" value="Next" />
      </form>
    </div>
  );
};
export default ProfileForm;
