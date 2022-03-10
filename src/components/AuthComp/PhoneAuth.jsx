import React, { useState } from "react";
import firebase from "./../../firebase";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "./auth.css";
import Logo from "./../../pages/HeaderComp/Logo";

const PhoneAuth = () => {
  let history = useHistory();
  let [state, setState] = useState({
    loading: false,
    phone: "",
  });
  let { loading, phone } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      console.log(phone);
      let recaptchaContainer = new firebase.auth.RecaptchaVerifier(
        "recaptha-container"
      );
      let ConfirmationMessage = await firebase
        .auth()
        .signInWithPhoneNumber(phone, recaptchaContainer);
      let code = window.prompt("enter otp");
      ConfirmationMessage.confirm(code);
      toast.success("successfully logged in");
      history.push("/userhome/profile");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <section id="authBlock">
      <article>
        <div>
          <Logo />
        </div>

        <div className="authContent1"></div>

        <div className="form-content">
          <div className="addForm">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="">Enter Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Phone Number "
                  className="form-control"
                  value={phone}
                  onChange={handleChange}
                />
              </div>
              <div id="recaptha-container"></div>
              <div className="form-group btn-group">
                <button>{loading === true ? "sending" : "send"}</button>
              </div>
              <div className="form-group">
                <p style={{ textAlign: "center" }}>
                  If you still need help, contact{" "}
                  <strong style={{ cursor: "pointer", color: "#1ed760" }}>
                    Spotify Support
                  </strong>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PhoneAuth;
