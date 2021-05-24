import { Store, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { History } from "history";
import { history } from "_helpers";
import { ApplicationState, createRootReducer } from "./store";

function configureStore(
  history: History,
  initialState: ApplicationState
): Store<ApplicationState> {
  const reduxMiddleware = [routerMiddleware(history), thunk];

  const store = createStore(
    createRootReducer(history),
    initialState,
    applyMiddleware(...reduxMiddleware)
  );

  return store;
}
const initialState: any = {};
const store = configureStore(history, initialState);

export default store;
