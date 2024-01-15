const fsmService = require("./lib/fsm/fsmService.js");

describe("createFiniteStateMachine", () => {
  const stateA = {
    name: "StateA",
    getNextState: jest.fn(),
    onEnter: jest.fn(),
    onExit: jest.fn(),
  };

  const stateB = {
    name: "StateB",
    getNextState: jest.fn(),
    onEnter: jest.fn(),
    onExit: jest.fn(),
  };

  it("the state should not change when no transition is defined for an event", () => {
    const initialState = stateA;
    const fsm = fsmService.createFiniteStateMachine(initialState);
    const payload = { a: 1 };

    fsm.transition("demoEvent", payload);

    expect(fsm.currentState.name).toBe(initialState.name);
  });

  it("should create a fsm with initial state", () => {
    const initialState = stateA;
    const fsm = fsmService.createFiniteStateMachine(initialState);
    expect(fsm.currentState).toBe(initialState);
  });

  it("should transition to the next state when a valid event is triggered", () => {
    const initialState = stateA;
    const fsm = fsmService.createFiniteStateMachine(initialState);

    const nextState = stateB;
    initialState.getNextState.mockReturnValue(nextState);

    const payload = { b: 2 };

    fsm.transition("someEvent", payload);

    expect(initialState.onExit).toHaveBeenCalledWith(payload);
    expect(nextState.onEnter).toHaveBeenCalledWith(payload);
    expect(fsm.currentState).toBe(nextState);
  });

  it("should transition to the next state without payload as argument", () => {
    const initialState = stateA;
    const fsm = fsmService.createFiniteStateMachine(initialState);

    const nextState = stateB;
    initialState.getNextState.mockReturnValue(nextState);

    fsm.transition("someEvent");

    expect(initialState.onExit).not.toHaveBeenCalledWith();
    expect(nextState.onEnter).not.toHaveBeenCalledWith();
    expect(fsm.currentState).toBe(nextState);
  });
});
