import Login from "src/pages/Login";
import NotFound from "src/pages/NotFound";
import Dashboard from "src/pages/Dashboard";
const routes = [
  {
    id: "main",
    path: "/",
    protected: true,
    component: () => <div>Home</div>,
  },
  {
    id: "dashboard",
    path: "/dashboard",
    protected: true,
    component: () => <Dashboard />,
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
