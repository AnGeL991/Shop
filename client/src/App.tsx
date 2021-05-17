/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MainLayout } from "components/layout";
import { ConnectedRouter } from "connected-react-router";
import { History } from "history";
import { Routers } from "routers";
import { AlertAction } from "store/alert";
import { useGetState } from "_hooks";
import { TelegramButton } from "components/common";
import { Listener } from "components/view";
import "normalize.css";
import "styles/global.scss";
interface MainProps {
  history: History;
}

const App: FC<MainProps> = ({ history }) => {
  const { alert } = useGetState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (alert.message) {
      history.listen(() => {
        dispatch(AlertAction.clear());
      });
    }
  }, [alert.message]);

  return (
    <ConnectedRouter history={history}>
      <Listener />
      <MainLayout>
        <TelegramButton />
        <Routers />
      </MainLayout>
    </ConnectedRouter>
  );
};

export default App;
