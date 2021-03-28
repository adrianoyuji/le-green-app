import { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header";
import DrawerComponent from "../DrawerComponent";

interface Props {
  children: ReactNode;
}

const useStyles = makeStyles((theme) => ({
  layout: {
    position: "relative",
    height: window.innerHeight || "100vh",
    width: "100vw",
    display: "flex",
    backgroundColor: "#e5e5e5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const Layout = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <main className={classes.layout}>
      <Header />
      <DrawerComponent />
      <div>{children}</div>
    </main>
  );
};

export default Layout;
