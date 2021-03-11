import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignupContext } from "./SignupContext";

const SocialForm = () => {
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();
  const { social, setSocial } = useSignupContext();

  const onSubmit = (data) => {
    setSocial(data);
    history.push("./review");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <input
        type="text"
        name="twitter"
        placeholder="What's your Twitter?"
        value={social.twitter}
        ref={register({ required: true })}
      />
      <p>{errors.twitter && "Your Twitter is required"}</p>
      <input
        type="text"
        name="facebook"
        placeholder="What's your Facebook?"
        value={social.facebook}
        ref={register({ required: true })}
      />
      <p>{errors.facebook && "Your Facebook is required"}</p>
      <input type="submit" value="Next" />
    </form>
  );
};
export default SocialForm;
