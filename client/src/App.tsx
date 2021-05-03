/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MainLayout } from "components/layout";
import { ConnectedRouter } from "connected-react-router";
import { History } from "history";
import { Routers } from "routers";
import { AlertAction } from "store/alert";
import { useLoading, useToggleClick } from "_hooks";
import { TelegramButton } from "components/common";
import { Listener } from "components/view";
import "normalize.css";
import "styles/global.scss";
interface MainProps {
  history: History;
}

const App: FC<MainProps> = ({ history }) => {
  const { inventoryLoading, alert } = useLoading();
  const { handleToggle, open } = useToggleClick();
  const dispatch = useDispatch();

  useEffect(() => {
    if (alert.message) {
      history.listen(() => {
        dispatch(AlertAction.clear());
      });
    }
  }, [alert.message]);
  let loading = true;
  if (loading) {
    return  <Listener />;
  }

  return (
    <ConnectedRouter history={history}>
     
      <MainLayout>
        <TelegramButton {...{ handleToggle }} />
        <iframe
          src="http://localhost:80"
          title="widget Chat"
          className={`webChat ${open && "webChat--active"}`}
        />
        <Routers />
      </MainLayout>
    </ConnectedRouter>
  );
};

export default App;
