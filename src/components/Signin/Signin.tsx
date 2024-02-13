import React, { ReactElement } from "react";
import { Button, TextInput } from "@mantine/core";
import "@mantine/core/styles.css";
import { IconAt } from "@tabler/icons-react";
import { SignInData } from "../Types/TypesSignInData";

const rem = (size: number) => `${size / 16}rem`;
type SignInProps = {
  onSubmit: (data: SignInData) => void;
};

const Signin: React.FC<SignInProps> = ({ onSubmit }) => {
  const icon: ReactElement = (
    <IconAt style={{ width: rem(16), height: rem(16) }} />
  );

  const [dataSignIn, setDataSignIn] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (target: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target.target;
    setDataSignIn((prevState: SignInData) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(dataSignIn);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form">
      <TextInput
        leftSection={icon}
        radius="md"
        name="email"
        label="Input email"
        withAsterisk={true}
        onChange={(e) => handleChange(e)}
        type="email"
        placeholder="Email"
      />

      <TextInput
        radius="md"
        label="Input password"
        withAsterisk
        onChange={(e) => handleChange(e)}
        name="password"
        type="password"
        placeholder="Password"
      />

      <Button className="button-offset" type="submit">
        Join
      </Button>
    </form>
  );
};

export default Signin;
