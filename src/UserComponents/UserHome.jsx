import React from "react";
import UserLeftBlock from "./UserLeftBlock";
import UserRightBlock from "./UserRightBlock";
import "./UserBlock.css";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";

const UserHome = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <section id="userBlock">
        <article>
          <UserLeftBlock />

          {/* dynamic contents are loading on right side */}
          <Switch>
            {/* <Route exact path={path}>
              <h3>PLease select a topic</h3>
            </Route> */}
            <Route path={`${path}/:id`}>
              <UserRightBlock />
            </Route>
          </Switch>
        </article>
      </section>
    </div>
  );
};

export default UserHome;
