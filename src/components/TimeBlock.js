import React from "react";
import PropTypes from "prop-types";
import { reducer, creators, initialState } from "../reducer.js";

const TimeBlock = ({ clock }) => {
  const timestamp = clock;

  var hours = Math.floor(timestamp / 60 / 60);
  var minutes = Math.floor(timestamp / 60) - hours * 60;
  var seconds = timestamp % 60;
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  return (
    <div className={"timer"}>
      <div className={"timer-wrapper"}>
        <div id="timer-label">Break</div>
        <div id="time-left">{`${minutes} : ${seconds}`}</div>
      </div>
    </div>
  );
};

TimeBlock.propTypes = {};

export default TimeBlock;
