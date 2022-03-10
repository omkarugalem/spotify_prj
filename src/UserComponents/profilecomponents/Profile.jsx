import React, { useContext } from "react";
import { AuthContextApi } from "../../Apis/AuthContext";
import "./profile.css";
import { Link } from "react-router-dom";
const Profile = () => {
  let { displayName, photoURL } = useContext(AuthContextApi);

  return (
    <section id="profileBlock">
      <header>
        <figure>
          <Link to="./uploadphoto">
            <span className="_editIcon">
              <i class="fa fa-pencil" aria-hidden="true"></i>
              Choose photo
            </span>
            <img src={photoURL} alt={displayName} />
          </Link>
        </figure>

        <aside>
          <h5>Profile</h5>
          <h1>{displayName}</h1>
        </aside>
      </header>

      <main></main>
      <footer></footer>
    </section>
  );
};

export default Profile;
