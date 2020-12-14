import React from "react";
import PropTypes from "prop-types";
import "../index";

const MobbingClock = (props) => {
  return (
    <div id={"container"}>
      <div className={"main-title"}>Mobbing Clock</div>
      <div className={"length-control"}>
        <div id="break-label">Break Length</div>
        <button className={"btn-level"} id={"break-decrement"} value="-">
          <i class="small material-icons">arrow_downward</i>
        </button>
        <div className={"btn-level"} id={"break-length"}>
          {6}
        </div>
        <button className={"btn-level"} id={"break-increment"} value="+">
          <i class="small material-icons">arrow_upward</i>
        </button>
      </div>
      <div className={"length-control"}>
        <div id={"session-label"}>Session Length</div>
        <button className={"btn-level"} id={"break-decrement"} value="-">
          <i class="small material-icons">arrow_downward</i>
        </button>
        <div className={"btn-level"} id={"break-length"}>
          {6}
        </div>
        <button className={"btn-level"} id={"break-increment"} value="+">
          <i class="small material-icons">arrow_upward</i>
        </button>
      </div>
    </div>
  );
};

MobbingClock.propTypes = {};

export default MobbingClock;
