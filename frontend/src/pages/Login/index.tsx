import React, { FormEvent, useState } from "react";
import { Box, TextField, Button, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from "../../assets/images/background.jpg";
import Logo from "src/components/Logo";
import Footer from "src/components/layout/Footer";
import api from "src/services/api";
import { useHistory } from "react-router-dom";
import ReducerType from "src/redux/types/ReducerType";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
} from "src/redux/Auth/Auth.actions";

const useStyles = makeStyles((theme) => ({
  loginBackground: {
    position: "relative",
    height: window.innerHeight,
    width: "100vw",
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
    height: "auto",
    backgroundColor: "white",
    zIndex: 2,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width:800px)": {
      width: "85%",
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
    textAlign: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  error: {
    color: "red",
  },
}));

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const auth = useSelector((state: ReducerType) => state.auth);
  const history = useHistory();

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(fetchUserRequest());
    try {
      const { data } = await api.post("/auth/signin", { email, password });
      dispatch(fetchUserSuccess(data.user));
      history.push("/");
    } catch (error) {
      dispatch(fetchUserFailure(error.response.data.message));
    }
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
          {auth.error && <span className={classes.error}>{auth.error}</span>}

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
          {auth.loading ? (
            <CircularProgress />
          ) : (
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
          )}
        </form>
      </Box>
      <Footer />
    </section>
  );
};

export default Login;
