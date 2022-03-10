

import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import "./profile.css";
import firebase from "firebase";
import { AuthContextApi } from "./../../Apis/AuthContext";

const ProfileUpload = () => {
  let AUTH = useContext(AuthContextApi);
  let [state, setState] = useState({
    profile_photo: "",
    loading: false,
    barStatus: false,
    progress: 0,
  });

  let { loading, profile_photo, barStatus,progress } = state;
  let handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.files[0] });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      //   console.log(profile_photo);
      let { name } = profile_photo;
      let uploadTask = firebase
        .storage()
        .ref(`user-photo/${name}`)
        .put(profile_photo);
      //   console.log(photo);
      toast.success("Successfully uploaded");
      // firebase events

      uploadTask.on(
        "state_changed",
        snapShot => {
          //progress bar
          let progressBar = (snapShot.bytesTransferred/snapShot.totalBytes)*100;
          setState({loading:true,barStatus:true,progress:progressBar});

        },
        error => {},
        async () => {
          //   completion of upload task
          let DownloadUrl = await firebase
            .storage()
            .ref("user-photo")
            .child(name)
            .getDownloadURL();
          AUTH.updateProfile({ photoURL: DownloadUrl });
        }
      );
      toast.success("successfully photo uploaded")
    } catch (error) {
      toast.error(error.message);
    }
  };
  let ProgressTemplate = () =>{
    return <progress value={progress} min={0} max={100}>
    {progress} data
    </progress>
  }
  return (
    <section id="photo_upload_block">
   {
      <section id="progressSection">
      <article>
      {barStatus === true ? (<>
      <span>
      <ProgressTemplate/>
      </span>
      <span>
      {Math.round(progress)+ "%"}</span>
      </>):(
        ""
      )}
      </article>
      </section>
   }
      <article>
      {/* <ProgressTemplate/> */}
        <div className="_block">
       
          <h2>Upload Photo</h2>
          <form onSubmit={handleSubmit}>
            <input type="file" name="profile_photo" onChange={handleChange} />
            <button >
              {loading === true ? <i className="fas fa-spinner"></i> : "Upload"}
            </button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default ProfileUpload;
