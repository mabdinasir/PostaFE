/* eslint-disable react/jsx-props-no-spreading */
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { CircularProgress, IconButton, InputAdornment } from "@mui/material";
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
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import Copyright from "../../components/copyright/Copyright";
import { GoogleLoginResponse } from "../../models/auth/GoogleLoginResponse";
import User from "../../models/users/User";
import { useSignInMutation } from "../../redux/slices/auth/authApiSlice";
import theme from "../../styles/theme";
import useStyles from "./styles/signin";

const SignIn = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [credentialResponse, setCredentialResponse] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [signInMutation, { isLoading, isSuccess, data: signinResponseData }] =
    useSignInMutation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = async (data: User) => {
    await signInMutation({
      email: data.email,
      password: data.password,
    });
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: async (response) => {
        setCredentialResponse(response.credential);
        const decodedResponse: GoogleLoginResponse =
          jwt_decode(credentialResponse);

        await signInMutation({
          email: decodedResponse.email,
          password: decodedResponse.email,
        });
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
        locale: "en",
      }
    );
  }, []);

  if (isSuccess) {
    const jwt = signinResponseData?.jwt;
    localStorage.setItem("token", JSON.stringify(jwt));
    navigate("/home", { replace: true });
  }

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
        variant="h6"
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
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <TextField
            {...register("email", { required: true })}
            margin="normal"
            required
            fullWidth
            id="email"
            label={<FormattedMessage id="email" />}
            name="email"
            autoComplete="email"
            autoFocus
            error={!!errors.email}
            helperText={errors.email && <FormattedMessage id="required" />}
          />
          <TextField
            {...register("password", { required: true })}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            error={!!errors.password}
            helperText={errors.password && <FormattedMessage id="required" />}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(event) => event.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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
            {isLoading ? (
              <CircularProgress
                size={24}
                sx={{ color: theme.palette.common.white }}
              />
            ) : (
              <FormattedMessage id="signin" />
            )}
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
