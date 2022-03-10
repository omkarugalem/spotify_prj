import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./auth.css";
import { toast } from "react-toastify";
import firebase from "../../firebase";

const LoginForm = ({ history }) => {
  let [state, setState] = useState({
    email: "",
    password: "",
    loading: false,
  });
  let { email, password, loading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      // console.log(state);
      setState({ loading: true });
      let userData = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (userData.user.emailVerified === true) {
        toast.success(`successfully ${email} logged in`);
        history.push("/");
      } else {
        history.push("/login");
        toast.error(
          `email has not yet verified go to ${email} verify then login`
        );
      }

      console.log(userData);
      toast.success(`successfully ${email} has been logged in`);
      history.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="loginform">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Email address or username</label>
          <input
            type="email"
            name="email"
            placeholder="Email address or username "
            id="email"
            className="form-control"
            onChange={handleChange}
            value={email}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"> Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            className="form-control"
            onChange={handleChange}
            value={password}
          />
        </div>
        <div className="form-group">
          <Link to="/password-reset">Forgot your password?</Link>
        </div>
        <div className="form-group">
          <span>
            <input
              type="checkbox"
              name="text"
              className="form-control"
              style={{ margin: "5px" }}
            />
            Remember me
          </span>
          <span>
            <button className="loginbtn">
              {loading === true ? "loading..." : "Log In"}
            </button>
          </span>
        </div>
        <hr />
        <div className="form-group">
          <h3 className="acc">Don't have an account?</h3>
        </div>
        <div className="form-group">
          <button className="button-group">Sign Up for spotify</button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
