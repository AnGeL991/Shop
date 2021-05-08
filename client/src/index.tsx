import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { history } from "_helpers";
import { Provider } from "react-redux";
import { initData } from "store/fetch";
import store from "configureStore";

function onLoad(store: any) {
  store.dispatch(initData());
}

function initApp() {
  onLoad(store);

  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    document.getElementById("root")
  );
}

initApp();

reportWebVitals();
