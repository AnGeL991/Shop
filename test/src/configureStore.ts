import { Store, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from "connected-react-router";
import { History } from 'history'
import { ApplicationState, createRootReducer } from './store';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

export default function configureStore(
  history: History,
  initialState: ApplicationState,
): Store<ApplicationState> {
  const reduxMiddlewares = [routerMiddleware(history), thunk]
  const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
 
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancer(
      applyMiddleware(...reduxMiddlewares))
  )

  return store;
}