/* eslint-disable react/jsx-props-no-spreading */
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import jwt_decode from "jwt-decode";
import { FormEvent, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Copyright from "../../components/copyright/Copyright";
import useStyles from "./styles/signin";

const SignIn = () => {
  const { classes } = useStyles();
  const [credentialResponse, setCredentialResponse] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  credentialResponse
    ? console.log(jwt_decode(credentialResponse))
    : console.log("no token");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: (response) => {
        setCredentialResponse(response.credential);
      },
    });

    google.accounts.id.renderButton(
      document.getElementById("signin-button") as HTMLElement,
      {
        theme: "outline",
        size: "large",
        shape: "rectangular",
        width: "240",
        type: "standard",
      }
    );
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <Box>
        <div
          id="signin-button"
          className={`${classes.common} ${classes.googleButton}`}
        />
      </Box>
      <Typography
        component="h1"
        variant="h4"
        className={`${classes.common} ${classes.orText}`}
      >
        <FormattedMessage id="or" />
      </Typography>
      <Box className={`${classes.common} ${classes.signinContainer}`}>
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          <FormattedMessage id="signin" />
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label={<FormattedMessage id="signin" />}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={<FormattedMessage id="rememberMe" />}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            <FormattedMessage id="signin" />
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/signup" variant="body2">
                <FormattedMessage id="forgotPassword" />
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                <FormattedMessage id="dontHaveAccount" />
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default SignIn;
