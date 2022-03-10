import React, { useState } from "react";
import { Fragment } from "react";
import { toast } from "react-toastify";
import "./audio.css";
import firebase from "./../../firebase";
import { useHistory } from 'react-router-dom';

let genre = [
  "Classic",
  "pop",
  "jazz",
  "country",
  "country pop",
  "rock",
  "soul ",
  "heavy metal",
  "rap",
  "hip-hop",
];

const CreatePlayList = () => {
  let history = useHistory();
  let [state, setState] = useState({
    audio_title: "",
    audio_artist: "",
    audio_language: "",
    audio_category: "",
    audio_details: "",
    loading: false,
    barStatus: false,
    progress: 0,
  });

  let {
    audio_title,
    audio_artist,
    audio_language,
    audio_category,
    audio_details,
    loading,
    barStatus,
    progress,
  } = state;

  let [Poster, setPoster] = useState("");
  let [AudioFile, setAudioFile] = useState("");

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handlePoster = e => {
    setPoster({ [e.target.name]: e.target.files[0] });
  };

  let handleAudioFile = e => {
    setAudioFile({ [e.target.name]: e.target.files[0] });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      console.log(state);
      console.log(Poster);
      console.log(AudioFile);
      let AUDIO_POSTER = Poster.audio_poster.name;
      let AUDIO_FILE = AudioFile.audio_file.name;
      let audio_storage = firebase
        .storage()
        .ref(`/music-poster/${AUDIO_POSTER}`)
        .put(Poster.audio_poster);
      let Mp3_storage = firebase
        .storage()
        .ref(`/music-File/${AUDIO_FILE}`)
        .put(AudioFile.audio_file);

      Mp3_storage.on(
        "state_changed",
        snapShot => {
          let progressBar =
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
          setState({ loading: true, barStatus: true, progress: progressBar });
        },
        err => {
          throw err;
        },
        async () => {
          // completion of task
          let DownloadPoster = await firebase
            .storage()
            .ref("music-poster")
            .child(AUDIO_POSTER)
            .getDownloadURL();
          setPoster(DownloadPoster);

          let DownloadMp3 = await firebase
            .storage()
            .ref("music-File")
            .child(AUDIO_FILE)
            .getDownloadURL();
          setAudioFile(DownloadMp3);
          firebase
            .database()
            .ref("audio_library")
            .push({ ...state, DownloadMp3, DownloadPoster });
          history.push("/userHome/profile");
          toast.success("successfully audio file is uploaded");

        }
      );

      // console.log(audio_storage);
      // console.log(Mp3_storage);
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false });
  };
  let ProgressTemplate = () => {
    return (
      <progress value={progress} min={0} max={100}>
        {progress} data
      </progress>
    );
  };
  return (
    <section id="AudioSection">
      {
        <section id="progressSection">
          <article>
            {barStatus === true ? (
              <>
                <span>
                  <ProgressTemplate />
                </span>
                <span>{Math.round(progress) + "%"}</span>
              </>
            ) : (
              ""
            )}
          </article>
        </section>
      }
      <article>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name="audio_title"
              value={audio_title}
              placeholder="Enter Audio Title"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="artist">Artist</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Artist Name"
              name="audio_artist"
              value={audio_artist}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="language">Language</label>
            <input
              type="text"
              className="form-control"
              name="audio_language"
              value={audio_language}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Audio Category</label>
            <select
              name="audio_category"
              value={audio_category}
              onChange={handleChange}
            >
              {genre.map((val, index) => (
                <Fragment key={index}>
                  <option value={val} defaultValue={val[0]}>
                    {val}
                  </option>
                </Fragment>
              ))}
            </select>
          </div>
          <div className="form-group audio_details">
            <label htmlFor="audio_details">Audio Details</label>
            <textarea
              name="audio_details"
              cols="30"
              rows="10"
              className="form-control"
              value={audio_details}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="audio_poster">Poster</label>
            <input type="file" name="audio_poster" onChange={handlePoster} />
          </div>
          <div className="form-group">
            <label htmlFor="audio_file">Upload Audio file</label>
            <input type="file" name="audio_file" onChange={handleAudioFile} />
          </div>
          <div className="form-group btn btn-group btn-block">
            <button>{loading ? "uploading" : "upload"}</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CreatePlayList;
