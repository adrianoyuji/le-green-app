import DashboardIcon from "@material-ui/icons/Dashboard";
import GroupIcon from "@material-ui/icons/Group";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const DrawerList = [
  { title: "Dashboard", path: "/dashboard", icon: DashboardIcon },
  { title: "Usuários", path: "/dashboard/users", icon: GroupIcon },
  {
    title: "Lucro Mensal",
    path: "/dashboard/profit",
    icon: MonetizationOnIcon,
  },
];

export default DrawerList;
