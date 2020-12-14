import React from "react";
import PropTypes from "prop-types";

const TimeBlock = (props) => {
  return (
    <div className={"timer"}>
      <div className={"timer-wrapper"}>
        <div id="timer-label">Break</div>
        <div id="time-left">05:52</div>
      </div>
    </div>
  );
};

TimeBlock.propTypes = {};

export default TimeBlock;
