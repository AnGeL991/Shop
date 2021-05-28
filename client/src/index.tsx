import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { history } from "_helpers";
import { Provider } from "react-redux";
import { initData } from "store/fetch";
import store from "configureStore";
const App = lazy(() => import("./App"));

function onLoad(store: any) {
  store.dispatch(initData());
}

function initApp() {
  onLoad(store);

  ReactDOM.render(
    <Provider store={store}>
      <Suspense fallback={<></>}>
        <App history={history} />
      </Suspense>
    </Provider>,
    document.getElementById("root")
  );
}

initApp();

reportWebVitals();
