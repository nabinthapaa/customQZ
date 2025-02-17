import { State, Action } from "./types";

export default function authReducer(_state: State, action: Action): State {
  const { type } = action;
  switch (type) {
    case "ADD_USER": {
      return { isAuthenticated: true, user: action.payload };
    }
    case "REMOVE_USER": {
      return { isAuthenticated: false, user: null };
    }
  }
}
