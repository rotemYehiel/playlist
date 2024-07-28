import { FiniteStateMachine } from "../lib/fsm/fsmInterface";

export interface ErrorMsg {
  message?: string;
}

export interface List {
  listName: string;
  listImage: string;
  songs?: Array<Song> | null;
}

export interface Song {
  name: string;
  artist?: string;
}

export interface RootState {
  fsm: FiniteStateMachine;
  list: List;
  errorMsg: ErrorMsg;
}

export type Action = {
  type: string;
  payload?: any;
};
