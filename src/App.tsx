import React from "react";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import { MantineProvider, Tabs } from "@mantine/core";
import { SignInData } from "./components/Types/TypesSignInData";
import { SignUpData } from "./components/Types/TypesSinUpData";

const App: React.FC = () => {
  const onSubmitSignIn = (data: SignInData) => {
    console.log("onSubmitSignIn: ", data);
  };

  const onSubmitSignUp = (data: SignUpData) => {
    console.log("onSubmitSignUp: ", data);
  };

  return (
    <MantineProvider>
      <div className="App">
        <div className="container">
          <Tabs defaultValue="signin">
            <Tabs.List>
              <Tabs.Tab value="signin" color="green">
                Sign In
              </Tabs.Tab>
              <Tabs.Tab value="signup" color="green">
                Sign Ip
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="signin" pt="xs">
              <Signin onSubmit={onSubmitSignIn} />
            </Tabs.Panel>

            <Tabs.Panel value="signup" pt="xs">
              <Signup onSubmit={onSubmitSignUp} />
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </MantineProvider>
  );
};

export default App;
