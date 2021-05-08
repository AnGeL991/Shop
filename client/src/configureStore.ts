import { Store, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { routerMiddleware } from "connected-react-router";
import { History } from "history";
import { history } from "_helpers";
import { ApplicationState, createRootReducer } from "./store";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

function configureStore(
  history: History,
  initialState: ApplicationState
): Store<ApplicationState> {
  const loggerMiddleware = createLogger();
  const reduxMiddleware = [routerMiddleware(history), thunk, loggerMiddleware];
  const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancer(applyMiddleware(...reduxMiddleware))
  );

  return store;
}
const initialState: any = {};
const store = configureStore(history, initialState);

export default store;
