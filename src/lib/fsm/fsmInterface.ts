interface FSMState {
    name: string;
    transitions: Record<string, FSMState>;
    onEnter: (payload?: any) => void;
    onExit: (payload?: any) => void;
    addTransition: (event: string, nextState: FSMState) => void;
    getNextState: (event: string) => FSMState | undefined;
  }
  
  interface StatePayload {
    listName?: string;
    setListFunc?: (list: any) => void;
    setErrorMsgFunc?: (error: any) => void;
  }

  interface FetchListPayload extends StatePayload {
    listName: string;
    setListFunc: (list: any) => void;
    setErrorMsgFunc: (error: any) => void;
  }

  interface FiniteStateMachine {
    currentState: FSMState;
    transition: (event: string, payload?: any) => void;
  }

  export type { FSMState,StatePayload ,FiniteStateMachine,FetchListPayload};