import { useState } from "react";
import { useForm } from "react-hook-form";
const ProfileForm = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <input
        type="text"
        name="name"
        placeholder="What's your name?"
        ref={register({ required: true })}
      />
      <p>{errors.name && "Your name is required"}</p>
      <input
        type="email"
        name="email"
        placeholder="What's your email?"
        ref={register({
          required: true,
          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      <p>{errors.email && "A valid email address is required"}</p>
      <input type="submit" value="Next" />
    </form>
  );
};
export default ProfileForm;
