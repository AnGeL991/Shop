import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { history } from "_helpers/history";
import configureStore from "./configureStore";
import { Provider } from "react-redux";
import { initData } from "store/fetch";

function onLoad(store: any) {
  store.dispatch(initData());
}

function initApp() {
  const initialState: any = {};
  const store = configureStore(history, initialState);
  onLoad(store);

  ReactDOM.render(
    <Provider store={store}>
      {/* <Init /></Init> */}
      <App history={history} />
    </Provider>,
    document.getElementById("root")
  );
}

initApp();

reportWebVitals();
