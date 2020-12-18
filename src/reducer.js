const initialState = {
  play: false,
  pause: false,
  restart: false,
  block: "session",
  breakLength: 5,
  sessionLength: 25,
  clock: 1500,
};

const actions = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  REMOVE_SECOND: "REMOVE_SECOND",
  STOP_COUNTDOWN: "STOP_COUNTDOWN",
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
  removeSecond: () => ({
    type: actions.REMOVE_SECOND,
  }),
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return {
        ...state,
        [action.payload.field]:
          state[action.payload.field] + action.payload.value,
      };
    case actions.DECREMENT:
      if (state[action.payload.field] <= 1) {
        return {
          ...state,
          [action.payload.field]: 1,
        };
      } else {
        return {
          ...state,
          [action.payload.field]:
            state[action.payload.field] - action.payload.value,
        };
      }
    case actions.REMOVE_SECOND:
      return {
        ...state,
        clock: state.clock - 1,
      };
    default:
      return state;
  }
};

export { actions, creators, reducer, initialState };
