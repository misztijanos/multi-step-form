import { useState } from "react";
import { useForm } from "react-hook-form";
const SocialForm = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <input
        type="text"
        name="twitter"
        placeholder="What's your Twitter?"
        ref={register({ required: true })}
      />
      <p>{errors.twitter && "Your Twitter is required"}</p>
      <input
        type="text"
        name="facebook"
        placeholder="What's your Facebook?"
        ref={register({ required: true })}
      />
      <p>{errors.facebook && "Your Facebook is required"}</p>
      <input type="submit" value="Next" />
    </form>
  );
};
export default SocialForm;
