import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MainLayout } from "components/layout";
import { ConnectedRouter } from "connected-react-router";
import { History } from "history";
import { Routers } from "routers";
import { AlertAction } from "store/alert";
import { useLoading } from "_hooks";
import "normalize.css";
import "styles/global.scss";

interface MainProps {
  history: History;
}

const App: FC<MainProps> = ({ history }) => {
  const { inventoryLoading, alert } = useLoading();
  const dispatch = useDispatch();

  useEffect(() => {
    if (alert.message) {
      history.listen(() => {
        dispatch(AlertAction.clear());
      });
    }

  },[alert.message]);

  if (inventoryLoading) {
    return <div>Loading..</div>;
  }

  return (
    <ConnectedRouter history={history}>
      {/* <Listener /> */}
      <MainLayout>
        <Routers />
      </MainLayout>
    </ConnectedRouter>
  );
};

export default App;
