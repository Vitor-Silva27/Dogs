import React from "react";
import Input from "../Login/formComponents/Input/Input";
import Button from "../Login/formComponents/Button/Button";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../Api/api";
import { UserContext } from "../../UserContext";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/error";
import Head from "../Helper/Head";

const SignUp = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head title="sign up" />
      <h1 className={`title`}>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Username" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Creating...</Button>
        ) : (
          <Button>Sign Up</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default SignUp;
