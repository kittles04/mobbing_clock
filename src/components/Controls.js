import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { creators } from "../reducer.js";

const Controls = ({ dispatch }) => {
  const intervalRef = React.useRef(null);
  const start = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(removeSecond, 1000);
  };

  const removeSecond = () => {
    dispatch(creators.removeSecond());
  };

  const stop = () => {
    window.clearInterval(intervalRef.current);
  };

  return (
    <div className={"timer-control"}>
      <button id={"start"} onClick={start}>
        <i className={"small material-icons"}>play_arrow</i>
      </button>
      <button id={"stop"} onClick={stop}>
        <i className={"small material-icons"}>pause</i>
      </button>
      <button id={"reset"}>
        <i className={"reset small material-icons"}>loop</i>
      </button>
    </div>
  );
};

Controls.propTypes = {};

export default Controls;
