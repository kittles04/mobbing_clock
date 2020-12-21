const initialState = {
  play: false,
  pause: false,
  block: "Session",
  breakLength: 5,
  sessionLength: 25,
  clock: 1500,
};

const actions = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  START_COUNTDOWN: "START_COUNTDOWN",
  REMOVE_SECOND: "REMOVE_SECOND",
  STOP_COUNTDOWN: "STOP_COUNTDOWN",
  RESET_COUNTDOWN: "RESET_COUNTDOWN",
};

const creators = {
  incrementTime: (field, value) => ({
    type: actions.INCREMENT,
    payload: {
      field,
      value,
    },
  }),
  decrementTime: (field, value) => ({
    type: actions.DECREMENT,
    payload: {
      field,
      value,
    },
  }),
  startCountdown: () => ({
    type: actions.START_COUNTDOWN,
  }),
  removeSecond: () => ({
    type: actions.REMOVE_SECOND,
  }),
  stopCountdown: () => ({
    type: actions.STOP_COUNTDOWN,
  }),
  resetCountdown: () => ({
    type: actions.RESET_COUNTDOWN,
  }),
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      if (state[action.payload.field] === 60) {
        console.log(state.clock);
        return {
          ...state,
          [action.payload.field]: state[action.payload.field],
          clock: state[action.payload.field] * 60,
        };
      } else if (action.payload.field === "sessionLength") {
        return {
          ...state,
          [action.payload.field]:
            state[action.payload.field] + action.payload.value,
          clock: (state[action.payload.field] + action.payload.value) * 60,
        };
      } else if (action.payload.field === "breakLength") {
        return {
          ...state,
          [action.payload.field]:
            state[action.payload.field] + action.payload.value,
        };
      }
    case actions.DECREMENT:
      if (state[action.payload.field] <= 1) {
        return {
          ...state,
          [action.payload.field]: 1,
        };
      } else if (action.payload.field === "breakLength") {
        return {
          ...state,
          [action.payload.field]:
            state[action.payload.field] - action.payload.value,
        };
      } else if (action.payload.field === "sessionLength") {
        return {
          ...state,
          [action.payload.field]:
            state[action.payload.field] - action.payload.value,
          clock: (state[action.payload.field] - action.payload.value) * 60,
        };
      }
    case actions.START_COUNTDOWN:
      return {
        ...state,
        play: true,
      };
    case actions.REMOVE_SECOND:
      if (state.clock === 0 && state.block === "Session") {
        return {
          ...state,
          block: "Break",
          clock: state.breakLength * 60,
        };
      } else if (state.block === "Break" && state.clock === 0) {
        return {
          ...state,
          block: "Session",
          clock: state.sessionLength * 60,
        };
      }
      return {
        ...state,
        clock: state.clock - 1,
      };
    case actions.STOP_COUNTDOWN:
      return {
        ...state,
        play: false,
        pause: true,
      };
    case actions.RESET_COUNTDOWN:
      return {
        ...state,
        block: "Session",
        clock: 1500,
        sessionLength: 25,
        breakLength: 5,
        pause: true,
        play: false,
      };
    default:
      return state;
  }
};

export { actions, creators, reducer, initialState };
