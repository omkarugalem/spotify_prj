import React, {
  Fragment,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import { AuthContextApi } from "./../../Apis/AuthContext";
import firebase from "firebase";
import { toast } from "react-toastify";
import "./HeaderComponent.css";



const HeaderMenu = () => {
  let AUTH = useContext(AuthContextApi);
  console.log(AUTH);
  let [toggle, setToggle] = useState(false);
  let toggledElement = useRef();
  let childRef = useRef();

  let ToggleIt = () => {
    setToggle(!toggle);
  };

  const handleClickOutside = event => {
    if (
      childRef.current &&
      toggledElement.current &&
      !toggledElement.current.contains(event.target) &&
      !childRef.current.contains(event.target)
    ) {
      setToggle(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);

let Logout = () =>{
  firebase.auth().signOut().then(_ =>{
    toast.success("successfully loggoed out from application");
    // JS way using loation property page reloading takes place
    window.location.assign('/login');
  })
  .catch(err => toast.error(err.message));
};

  let AnonymousUser = () => {
    return (
      <Fragment>
        <li>
          <Link to="/">premium</Link>
        </li>
        <li>
          <Link to="/</li>">support</Link>
        </li>
        <li>
          <Link to="">Download</Link>
        </li>
        <li className="bar">
          <Link to=""></Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </Fragment>
    );
  };
  let AuthenticatedUser = () => {
    return (
      <Fragment>
        <li>
          {/* <Link to="/userHome/profile"> */}

          <figure
            className="profile_img"
            ref={toggledElement}
            onClick={ToggleIt}
          >
            <img src={AUTH.photoURL} alt={AUTH.displayName} />
            <figcaption>{AUTH.displayName}</figcaption>
          </figure>
          <div ref={childRef} className="dropdown">
            <ul
              className="dropdown"
              ref={childRef}
              style={
                toggle === true ? { display: "block" } : { display: "none" }
              }
            >
              <li>
                <Link href="">
                  Account
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    viewBox="0 0 16 16"
                    class="Svg-sc-1bi12j5-0 hDgDGI"
                    style={{ marginLeft: "96px" }}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/userhome/profile">Profile</Link>
              </li>
              <li>
                <Link href="">
                  Upgrade to premium
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    viewBox="0 0 16 16"
                    class="Svg-sc-1bi12j5-0 hDgDGI"
                    style={{ marginLeft: "15px" }}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <a onClick={Logout}>Logout</a>
              </li>
            </ul>
          </div>
          {/* </Link> */}
        </li>
      </Fragment>
    );
  };
  return (
    <Fragment>
      <nav>
        <ul>{AUTH ? <AuthenticatedUser /> : <AnonymousUser />}</ul>
      </nav>
    </Fragment>
  );
};

export default HeaderMenu;
