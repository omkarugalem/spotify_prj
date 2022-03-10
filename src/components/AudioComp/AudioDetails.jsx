import React, { useContext } from "react";
import { AudioContextApi } from "./../../Apis/AudioContext";

const AudioDetails = () => {
  let currentSong = useContext(AudioContextApi);
  let playSong = currentSong.selectSong;
  console.log(playSong);

  return (
    <section className="audioPlayer">
      <article>
        {currentSong == null ? (
          "loading"
        ) : (
          <div className="contentBlock">
            <header>
              <h5>{playSong.title}</h5>
              <p>
                <img src={playSong.poster} alt={playSong.title} />
              </p>
            </header>
            <main>
              <audio autoPlay="true" src={playSong.src} controls></audio>
            </main>
          </div>
        )}
      </article>
    </section>
  );
};

export default AudioDetails;
