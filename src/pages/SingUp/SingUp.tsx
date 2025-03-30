import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Line from "../../components/Line/Line";
import Logo from "../../components/Logo/Logo";
import Blur from "../../components/Blur/Blur";
import PrimaryText from "../../components/PrimaryText/PrimaryText";
import SecondaryText from "../../components/SecondaryText/SecondaryText";
import Field from "../../components/Field/Field";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Link from "../../components/Link/Link";
import { logIn, signUp } from "../../services/auth";

import "./SingUp.css";

function SignUpPage() {
  const navigate = useNavigate();

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    signUp(username, password);
    logIn(username, password);
    navigate("/home");
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Blur width="30vw" mLeft="17vw" mTop="-5vw"></Blur>
      <Blur width="30vw" mLeft="-17vw" mTop="16vw"></Blur>

      <div className="form-wrap">
        <Logo width="6vw" mBottom="2vw" />
        <Line color="white" width="23vw" height="0.2vw" mBottom="2vw" />
        <PrimaryText size="2vw" weight="bold" mBottom="4vw">
          Sign up to OpenMusic
        </PrimaryText>

        <form onSubmit={handleFormSubmit}>
          <SecondaryText size="1.3vw" mBottom="0.5vw">
            Create a username
          </SecondaryText>
          <Field
            height="2.5vw"
            width="21vw"
            value={username}
            setValue={setUsername}
            mBottom="1vw"
          ></Field>
          <SecondaryText size="1.3vw" mBottom="0.5vw">
            Create a password
          </SecondaryText>
          <Field
            height="2.5vw"
            width="21vw"
            value={password}
            setValue={setPassword}
            mBottom="4vw"
            type="password"
          ></Field>
          <PrimaryButton
            height="3.2vw"
            width="21vw"
            mBottom="2vw"
            fontSize="1.3vw"
          >
            Countinue
          </PrimaryButton>
        </form>

        <div className="no-account">
          <PrimaryText size="0.95vw">Already have an account?</PrimaryText>
          <Link href="/login" size="0.95vw" weight="bold">
            Log in to OpenMusic
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
