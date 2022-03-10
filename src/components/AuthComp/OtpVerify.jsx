import React from "react";
import Logo from "../../pages/HeaderComp/Logo";
import "./auth.css";

const OtpVerify = () => {
  return (
    <section id="authBlock">
      <article>
        <div>
          <Logo />
        </div>
        <hr />

        <div className="authContent1"></div>

        <div className="form-content">
          <div className="addForm">
            <form>
              <div className="form-group">
                <label htmlFor="">Enter Phone Number</label>
                <input
                  type="text"
                  name="otp"
                  placeholder="6-Digit Code"
                  className="form-control"
                />
              </div>
              <div className="form-group btn-group">
                <button>Next</button>
              </div>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default OtpVerify;
