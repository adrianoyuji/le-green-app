import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import DrawerList from "./DrawerList";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleDrawer,
  setHeaderTitle,
} from "src/redux/Navigation/Navigation.actions";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const DrawerComponent = () => {
  const { isDrawerOpen } = useSelector((state: any) => state.navigation);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const onDrawerToggle = () => {
    dispatch(toggleDrawer());
  };

  const handleDrawerSelect = (item: any) => {
    dispatch(setHeaderTitle(item.title));
    dispatch(toggleDrawer());
    history.push(item.path);
  };

  const list = () => (
    <div className={classes.list} role="presentation">
      <List>
        {DrawerList.map((item) => (
          <ListItem
            button
            key={item.title}
            onClick={() => handleDrawerSelect(item)}
          >
            <ListItemIcon>{<item.icon />}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={onDrawerToggle}>
      {list()}
    </Drawer>
  );
};

export default DrawerComponent;
