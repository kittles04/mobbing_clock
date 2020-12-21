import React from "react";
import PropTypes from "prop-types";
import { reducer, creators, initialState } from "../reducer.js";

const TimeBlock = ({ clock, block }) => {
  const timestamp = clock;

  var minutes = Math.floor(timestamp / 60);
  var seconds = timestamp % 60;
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  return (
    <div className={"timer"}>
      <div className={`timer-wrapper ${clock <= 60 ? "warning" : ""}`}>
        <div id="timer-label">{block}</div>
        <div id="time-left">{`${minutes}:${seconds}`}</div>
      </div>
    </div>
  );
};

TimeBlock.propTypes = {
  clock: PropTypes.number.isRequired,
  block: PropTypes.string.isRequired,
};

export default TimeBlock;
