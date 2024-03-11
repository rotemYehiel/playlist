import {FiniteStateMachine, FSMState} from './fsmInterface'

const createState = (
  name: string,
  onEnter: (payload?: any) => void = () => {},
  onExit: (payload?: any) => void = () => {},
  transitions: Record<string, FSMState> = {}
): FSMState => {
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

const createFiniteStateMachine = (initialState:FSMState) => {
  const fsm : FiniteStateMachine= {
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

export { createFiniteStateMachine, createState };  

