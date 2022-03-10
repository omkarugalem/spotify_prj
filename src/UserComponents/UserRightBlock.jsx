import React from "react";
import { useParams } from "react-router-dom";
import CreatePlaylist from "../components/AudioComp/CreatePlaylist";
import Profile from "./profilecomponents/Profile";
import ProfileUpload from "./profilecomponents/ProfileUpload";
import MusicHome from "../components/AudioComp/MusicHome";
import AudioDetails from "../components/AudioComp/AudioDetails";
// to import url parameters useparam
const UserRightBlock = () => {
  let { id } = useParams();
  return (
    <div className="userRightBlock">
      {id === "profile" && <Profile />}
      {id === "uploadphoto" && <ProfileUpload />}
      {id === "create-playlist" && <CreatePlaylist />}
      {id === "music-home" && <MusicHome />}
      <AudioDetails />
    </div>
  );
};

export default UserRightBlock;
