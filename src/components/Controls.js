import React, { useRef } from "react";
import PropTypes from "prop-types";
import { creators } from "../reducer.js";

const Controls = ({ dispatch, clock, play }) => {
  const intervalRef = React.useRef(null);
  const start = () => {
    dispatch(creators.startCountdown());
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(removeSecond, 1000);
  };

  const removeSecond = () => {
    dispatch(creators.removeSecond());
  };

  const stop = () => {
    dispatch(creators.stopCountdown());
    window.clearInterval(intervalRef.current);
  };

  const togglePlay = () => {
    if (play) {
      stop();
    } else {
      start();
    }
  };

  if (clock === 0) {
    let sound = document.getElementById("beep");
    sound.play();
  }

  return (
    <div className={"timer-control"}>
      <button id={"start_stop"} onClick={togglePlay}>
        <i className={"small material-icons"}>play_arrow</i>
        <i className={"small material-icons"}>pause</i>
      </button>
      <button
        id={"reset"}
        onClick={() => {
          let sound = document.getElementById("beep");
          dispatch(creators.resetCountdown());
          stop();
          sound.pause();
          sound.currentTime = 0;
        }}
      >
        <i className={"reset small material-icons"}>loop</i>
      </button>
      <audio id={"beep"} src="./alarm_beeps.mp3" type="audio/mpeg"></audio>
    </div>
  );
};

Controls.propTypes = {
  clock: PropTypes.number.isRequired,
  play: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Controls;
