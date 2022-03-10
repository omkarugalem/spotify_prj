import React, { useContext, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./pages/HeaderComp/Navbar";
import Slider from "./pages/SliderComp/Slider";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Login from "./components/AuthComp/Login";
import Signup from "./components/AuthComp/Signup";
import { AuthContextApi } from "./Apis/AuthContext";
import Spinner from "./pages/spinners/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserHome from "./UserComponents/UserHome";
import ProtectedRouter from "./Helper/ProtectedRouter";
// import MyFirstPortal from "./pages/MyFirstPortal";
import PublicRouter from "./Helper/PublicRouter";
import Password_Reset from "./components/AuthComp/Password_Reset";
import PhoneAuth from "./components/AuthComp/PhoneAuth";
import OtpVerify from "./components/AuthComp/OtpVerify";
const App = () => {
  let AUTH = useContext(AuthContextApi);

  return (
    <section id="spotifyMainBlock">
      <article>
        <Router>
          <header>
            <Navbar />
          </header>

          {/* <header>{!USER ? <Navbar /> : ""}</header> */}
          {/* toastify import */}
          <ToastContainer />
          {/* <MyFirstPortal/> */}
          <main>
            {/* <Slider /> */}
            {/* dynamic routing starts here  */}
            <Switch>
              <PublicRouter path="/" exact>
                <Home />
              </PublicRouter>
              <PublicRouter path="/login" exact>
                <Login />
              </PublicRouter>
              <PublicRouter path="/signup" exact>
                <Signup />
              </PublicRouter>
              <PublicRouter path="/password-reset" exact>
                <Password_Reset />
              </PublicRouter>
              <PublicRouter path="/phone-auth" exact>
                <PhoneAuth />
              </PublicRouter>

              <PublicRouter path="/otp-verify" exact>
                <OtpVerify />
              </PublicRouter>
              {/* start authentication routes */}
              {/* {AUTH === null ? (
                <Spinner />
              ) : (
                <Route path="/userhome">
                  <UserHome />
                </Route>
              )} */}

              <ProtectedRouter path="/userhome" component={UserHome} />

              {/* end of authentication routes */}

              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
            {/* dynamic routing stops here  */}
          </main>
        </Router>
      </article>
    </section>
  );
};

//     return <UserHome />;
//   };

//   return (
//     <Fragment>
//       {state === null ? <IsAnnonymousTemplate /> : <IsAuthenticatedTemplate />}
//     </Fragment>
//   );
// };

export default App;
