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
  const user = useSelector((state: ReducerType) => state.auth.user);

  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route key={route.id} exact path={route.path}>
            {route.protected ? (
              user.authorized ? (
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
