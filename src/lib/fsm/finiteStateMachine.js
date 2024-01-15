const createState = (
  name,
  onEnter = () => {},
  onExit = () => {},
  transitions = {}
) => {
  return {
    name,
    transitions,
    onEnter,
    onExit,
    addTransition(event, nextState) {
      this.transitions[event] = nextState;
    },
    getNextState(event) {
      return this.transitions[event];
    },
  };
};

const createFiniteStateMachine = (initialState) => {
  const fsm = {
    currentState: initialState,
    transition(event, payload = null) {
      const nextState = this.currentState.getNextState(event);

      if (nextState) {
        this.currentState.onExit(payload);
        nextState.onEnter(payload);
        this.currentState = nextState;
      }
    },
  };

  return fsm;
};

module.exports = { createFiniteStateMachine, createState };
