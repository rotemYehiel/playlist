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
        console.log(
          `Transitioning from ${this.currentState.name} to ${nextState.name}`
        );
        this.currentState.onExit(payload);
        nextState.onEnter(payload);
        this.currentState = nextState;
      } else {
        console.log(
          `No transition defined for event '${event}' in state '${this.currentState.name}'`
        );
      }
    },
  };

  return fsm;
};

module.exports = { createFiniteStateMachine, createState };
