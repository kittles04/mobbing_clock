import React, { useReducer } from "react";
import PropTypes from "prop-types";
import TimeBlock from "./TimeBlock";
import Controls from "./Controls";
import { reducer, creators, initialState } from "../reducer.js";
import "../index";

const MobbingClock = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div id={"container"}>
      <div className={"main-title"}>Mobbing Clock</div>
      <div className={"length-control"}>
        <div id="break-label">Break Length</div>
        <button
          className={"btn-level"}
          id={"break-decrement"}
          value="-"
          onClick={() => dispatch(creators.decrementTime("breakLength", 1))}
        >
          <i className={"small material-icons"}>arrow_downward</i>
        </button>
        <div className={"btn-level"} id={"break-length"}>
          {state.breakLength}
        </div>
        <button
          className={"btn-level"}
          id={"break-increment"}
          value="+"
          onClick={() => dispatch(creators.incrementTime("breakLength", 1))}
        >
          <i className={"small material-icons"}>arrow_upward</i>
        </button>
      </div>
      <div className={"length-control"}>
        <div id={"session-label"}>Session Length</div>
        <button
          className={"btn-level"}
          id={"break-decrement"}
          value="-"
          onClick={() => dispatch(creators.decrementTime("sessionLength", 1))}
        >
          <i className={"small material-icons"}>arrow_downward</i>
        </button>
        <div className={"btn-level"} id={"break-length"}>
          {state.sessionLength}
        </div>
        <button
          className={"btn-level"}
          id={"break-increment"}
          value="+"
          onClick={() => dispatch(creators.incrementTime("sessionLength", 1))}
        >
          <i className={"small material-icons"}>arrow_upward</i>
        </button>
      </div>
      <TimeBlock clock={state.clock} />
      <Controls dispatch={dispatch} />
    </div>
  );
};

MobbingClock.propTypes = {};

export default MobbingClock;
