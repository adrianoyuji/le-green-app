import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footerStyle: {
    marginTop: "1em",
    color: "white",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const year = new Date().getFullYear();
  return (
    <footer className={classes.footerStyle}>
      Le Green Investimentos © {year}
    </footer>
  );
};

export default Footer;
