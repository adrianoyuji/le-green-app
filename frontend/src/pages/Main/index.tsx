import { useSelector } from "react-redux";
import ReducerType from "src/redux/types/ReducerType";
import routes from "src/routes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const Main = () => {
  const auth = useSelector((state: ReducerType) => state.auth);

  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route key={route.id} exact path={route.path}>
            {route.protected ? (
              auth.isSigned ? (
                route.component
              ) : (
                <Redirect to="/login" />
              )
            ) : (
              route.component()
            )}
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default Main;
