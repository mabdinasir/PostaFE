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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormattedMessage } from "react-intl";
import { Navigate } from "react-router-dom";
import Copyright from "../../components/copyright/Copyright";
import { SignUpFormFields } from "../../models/auth/SignUpFormFields";
import { useSignUpMutation } from "../../redux/slices/auth/authApiSlice";
import theme from "../../styles/theme";
import useStyles from "./styles/signup";

const SignUp = () => {
  const { classes } = useStyles();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpFormFields>();

  const [signUpMutation, { isLoading, isSuccess }] = useSignUpMutation();

  const onSubmit = async (data: SignUpFormFields) => {
    await signUpMutation({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    }).unwrap();
  };

  return (
    <Container component="main" maxWidth="xs">
      {isSuccess && <Navigate to="/home" replace />}
      <Box className={classes.signinContainer}>
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          <FormattedMessage id="signup" />
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("firstName", { required: true })}
                autoComplete="given-name"
                name="firstName"
                fullWidth
                id="firstName"
                label={<FormattedMessage id="firstName" />}
                autoFocus
                error={!!errors.firstName}
                helperText={
                  errors.firstName && <FormattedMessage id="required" />
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("lastName", { required: true })}
                fullWidth
                id="lastName"
                label={<FormattedMessage id="lastName" />}
                name="lastName"
                autoComplete="family-name"
                error={!!errors.lastName}
                helperText={
                  errors.lastName && <FormattedMessage id="required" />
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("email", { required: true })}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={!!errors.email}
                helperText={errors.email && <FormattedMessage id="required" />}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("password", { required: true })}
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="new-password"
                error={!!errors.password}
                helperText={
                  errors.password && <FormattedMessage id="required" />
                }
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
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label={<FormattedMessage id="receiveMarketing" />}
              />
            </Grid>
          </Grid>
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
              <FormattedMessage id="signup" />
            )}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                <FormattedMessage id="haveAccount" />
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default SignUp;
