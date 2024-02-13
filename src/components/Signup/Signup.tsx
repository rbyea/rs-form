import React, { ReactElement } from "react";
import { Button, Group, Radio, TextInput } from "@mantine/core";
import "@mantine/core/styles.css";
import { IconAt } from "@tabler/icons-react";
import { SignUpData } from "../Types/TypesSinUpData";

const rem = (size: number) => `${size / 16}rem`;

type SignUpProps = {
  onSubmit: (data: SignUpData) => void;
};

const Signup: React.FC<SignUpProps> = ({ onSubmit }) => {
  const icon: ReactElement = (
    <IconAt style={{ width: rem(16), height: rem(16) }} />
  );

  const [dataSignUp, setDataSignUp] = React.useState({
    name: "",
    nick: "",
    email: "",
    male: false,
    password: "",
    repeatPassword: "",
  });

  const handleChange = (target: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target.target;
    setDataSignUp((prevState: SignUpData) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(dataSignUp);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form">
      <TextInput
        radius="md"
        label="Input name"
        withAsterisk={true}
        placeholder="Name"
        name="name"
        onChange={(e) => handleChange(e)}
      />

      <TextInput
        radius="md"
        label="Input nick"
        withAsterisk={true}
        placeholder="Nick"
        onChange={(e) => handleChange(e)}
        name="nick"
      />
      <TextInput
        leftSection={icon}
        radius="md"
        label="Input email"
        withAsterisk={true}
        type="email"
        onChange={(e) => handleChange(e)}
        placeholder="Email"
        name="email"
      />
      <Radio.Group name="floor" withAsterisk>
        <Group mt="xs">
          <Radio
            onChange={(e) => handleChange(e)}
            value="male"
            label="Male"
            name="male"
          />
          <Radio
            onChange={(e) => handleChange(e)}
            value="women"
            label="Women"
            name="male"
          />
        </Group>
      </Radio.Group>

      <TextInput
        radius="md"
        label="Input password"
        onChange={(e) => handleChange(e)}
        withAsterisk
        type="password"
        placeholder="Password"
        name="password"
      />

      <TextInput
        radius="md"
        label="Repeat password"
        onChange={(e) => handleChange(e)}
        withAsterisk
        type="password"
        name="repeatPassword"
        placeholder="Repeat password"
      />

      <Button type="submit" className="button-offset">
        Button
      </Button>
    </form>
  );
};

export default Signup;
