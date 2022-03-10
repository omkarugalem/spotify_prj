import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../firebase";
const Password_Reset = () => {
  let history = useHistory();
  let [state, setState] = useState({
    loading: false,
    email: "",
  });

  let { loading, email } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      await firebase.auth().sendPasswordResetEmail(email);
      let message = `password reset message has been sent to ${email}`;
      toast.info(message);
      history.push("/login");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section id="authBlock">
      <article>
        <div className="authContent1">
          <h1>Password Reset</h1>
          <p className="para">
            Enter your Spotify username , or the email address that you used to
            register. We'll send you an email with your username and a link to
            reset your password.
          </p>
        </div>

        <div className="form-content">
          <div className="addForm">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="password_reset">
                  Email address or username
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  required
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group btn-group">
                <button style={{ color: "white" }}>Send</button>
              </div>
              <div className="form-group">
                <p style={{ textAlign: "center" }}>
                  If you still need help, contact{" "}
                  <strong style={{ cursor: "pointer", color: "#1ed760" }}>
                    Spotify Support
                  </strong>
                  
                </p>
              </div>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Password_Reset;
