import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../firebase";
import { toast } from "react-toastify";
const SignupForm = ({ history }) => {
  let [state, setState] = useState({
    email: "",
    email1: "",
    password: "",
    profile_name: "",
    month: "",
    dd: "",
    yy: "",
    gender: "",
    loading: false,
  });

  let {
    email,
    email1,
    password,
    profile_name,
    month,
    dd,
    yy,
    gender,
    loading,
  } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log(state);
      setState({ loading: true });
      if (email === email1) {
        let User_Data = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        // toast.success("successfully user registered");

        // email confirmation using firebase
        let ConfirmMessage = `A verification message has been sent to ${email} and verify and login`;
        User_Data.user.sendEmailVerification();
        toast.info(ConfirmMessage);

        User_Data.user.updateProfile({
          displayName: profile_name,
          photoURL:
            "https://image.shutterstock.com/image-vector/default-avatar-profile-icon-social-260nw-1677509740.jpg",
        });

        // js way of navigating to login after sign up(page is refreshed)
        // window.location.assign("/login");
        // console.log(User_Data);

        // react way of redirecting
        history.push("/login");
      } else {
        // console.log("confirm email is not matching");
        toast.error("confirm email is not matching");
      }
      // setState({ loading: true });
    } catch (error) {
      toast.error(error.message);
    }

    // js way of navigating to login after sign up
  };
  return (
    <div className="addForm">
      <h2>Sign up with your email address</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">What's your email?</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email "
            id="email"
            className="form-control"
            onChange={handleChange}
            value={email}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email1">Confirm your email </label>
          <input
            type="email"
            name="email1"
            placeholder="Enter your email "
            id="email1"
            className="form-control"
            onChange={handleChange}
            value={email1}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Create a password</label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            id="password"
            className="form-control"
            onChange={handleChange}
            value={password}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username"> What should we call you?</label>
          <input
            type="text"
            name="profile_name"
            placeholder="Enter a profile name"
            id="profile_name"
            className="form-control"
            onChange={handleChange}
            value={profile_name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">What's your date of birth? </label>
          <div className="dateBlock">
            <input
              type="text"
              name="month"
              placeholder="month"
              value={month}
              required
              onChange={handleChange}
            />
            <input
              type="text"
              name="dd"
              placeholder="DD"
              required
              value={dd}
              onChange={handleChange}
            />
            <input
              type="text"
              name="yy"
              placeholder="YYYY"
              required
              value={yy}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">What's your gender? </label>
          <main className="genderBlock" value={gender} onChange={handleChange}>
            <span>
              <input
                type="radio"
                name="gender"
                value="Male"
                className="form-control"
              />
              Male
            </span>
            <span>
              <input
                type="radio"
                name="gender"
                value="Female"
                className="form-control"
              />
              Female
            </span>
            <span>
              <input
                type="radio"
                name="gender"
                value="Non-Binary"
                className="form-control"
              />
              Non-Binary
            </span>
          </main>
        </div>
        <div className="form-group">
          <input type="checkbox" className="form-control" name="text" />
          <span className="checkBoxContent" style={{ padding: "12px" }}>
            Share my registration data with Spotify's content providers for
            marketing purposes.
          </span>
        </div>
        <div className="form-group">
          <p className="copywriteText">
            <p>
              By clicking on sign-up, you agree to Spotify's Terms and
              Conditions of Use.
            </p>
            <br />
            To learn more about how Spotify collects, uses, shares and protects
            your personal data, please see Spotify's Privacy Policy.
          </p>
        </div>
        <div className="form-group btn-group">
          <button> {loading === true ? "loading..." : "sign up"}</button>
        </div>
        <div className="form-group">
          <p style={{ textAlign: "center" }}>
            Have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignupForm);
