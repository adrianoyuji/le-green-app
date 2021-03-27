import React, { FormEvent, useState } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from "../../assets/images/background.jpg";
import Logo from "src/components/Logo";
import Footer from "src/components/layout/Footer";

const useStyles = makeStyles((theme) => ({
  loginBackground: {
    position: "relative",
    height: window.innerHeight,
    width: window.innerWidth,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.5,
  },
  loginBox: {
    padding: "1rem",
    width: "35%",
    height: "60%",
    backgroundColor: "white",
    zIndex: 2,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width:800px)": {
      width: "85%",
      height: "60%",
    },
  },
  formStyles: {
    display: "flex",
    height: "75%",
    width: "85%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputSpacing: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
}));

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLoginSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <section className={classes.loginBackground}>
      <div className={classes.backgroundOverlay}></div>
      <Box className={classes.loginBox} boxShadow={3}>
        <Logo />
        <form className={classes.formStyles} onSubmit={handleLoginSubmit}>
          <span className={classes.inputSpacing}>
            Faça o login para acessar a plataforma
          </span>
          <TextField
            id="user-email"
            label="Email"
            fullWidth
            className={classes.inputSpacing}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="user-password"
            label="Senha"
            type="password"
            fullWidth
            className={classes.inputSpacing}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="medium"
            fullWidth
            className={classes.inputSpacing}
          >
            Entrar
          </Button>
        </form>
      </Box>
      <Footer />
    </section>
  );
};

export default Login;
