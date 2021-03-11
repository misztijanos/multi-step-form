import { useSignupContext } from "./SignupContext";
const ReviewForm = () => {
  const { profile, social } = useSignupContext();
  const upload = () => console.log("upload data here");
  return (
    <div>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Twitter: {social.twitter}</p>
      <p>Facebook: {social.facebook}</p>
      <input type="submit" value="Submit" onClick={upload} />
    </div>
  );
};
export default ReviewForm;
