import React from "react";
import PropTypes from "prop-types";

const Controls = (props) => {
  return (
    <div className={"timer-control"}>
      <button id={"start_stop"}>
        <i className={"small material-icons"}>play_arrow</i>
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
