import React, { useContext, Fragment } from "react";

import Spinner from "../../pages/spinners/Spinner";
import { AudioContextApi } from "./../../Apis/AudioContext";
import "./audio.css";
import AudioList from "./AudioList";

const MusicHome = () => {
  let AUDIO = useContext(AudioContextApi);
  console.log(AUDIO);
  return (
    <Fragment>
      {AUDIO.state.length >= 0 && (
        <AudioList audio={AUDIO.state} HandleSelect={AUDIO.HandleSelect} />
      )}
    </Fragment>
  );
};

export default MusicHome;
