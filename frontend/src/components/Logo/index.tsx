import React from "react";
import LogoImg from "src/assets/images/legreen-logo.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  imgContainter: {
    maxHeight: "50%",
    maxWidth: "80%",
    margin: "0.5em",
  },
});

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.imgContainter}>
      <img src={LogoImg} alt="legreen-logo" height="100%" width="100%" />
    </div>
  );
};

export default Logo;
