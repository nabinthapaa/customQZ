export type State = {
  isAuthenticated: boolean;
  user: Record<string, string> | null;
};

export type Action =
  | {
      type: "ADD_USER";
      payload: Record<string, string>;
    }
  | {
      type: "REMOVE_USER";
    };

export type IAuthContext =
  | { auth: State; dispatch: React.Dispatch<Action> }
  | undefined;
