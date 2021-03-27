import Login from "src/pages/Login";
import NotFound from "src/pages/NotFound";
import Home from "src/pages/Home";
const routes = [
  {
    id: "main",
    path: "/",
    protected: true,
    component: () => <div>Home</div>,
  },
  {
    id: "home",
    path: "/home",
    protected: true,
    component: () => <Home />,
  },
  {
    id: "login",
    path: "/login",
    protected: false,
    component: () => <Login />,
  },
  {
    id: "404",
    path: "*",
    protected: false,
    component: () => <NotFound />,
  },
];

export default routes;
