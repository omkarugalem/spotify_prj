import React from "react";

const AudioItem = props => {
  return (
    <div className="col-3" onClick={() => props.HandleSelect(props.audio)}>
      <figure>
        <img src={props.audio.poster} alt={props.audio.title} />
        <h2>{props.audio.title}</h2>
      </figure>
    </div>
  );
};

export default AudioItem;
