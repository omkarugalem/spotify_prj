import React from "react";
import "./auth.css";
import Logo from "./../../pages/HeaderComp/Logo";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <section id="authBlock">
      <article>
        <Logo />
        <div className="authContent">
          <h1>Sign up for free to start listening</h1>
          <button>Sign up with FaceBook</button>
          <p className="orBlock">
            <strong>or</strong>
          </p>
        </div>
        <div className="form-content">
          <SignupForm />
        </div>
      </article>
    </section>
  );
};

export default Signup;
