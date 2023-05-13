/* eslint-disable react/jsx-props-no-spreading */
import { Link, Typography } from "@mui/material";
import { ComponentProps } from "react";
import { FormattedMessage } from "react-intl";

const Copyright = (props: ComponentProps<typeof Typography>) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <FormattedMessage id="copyRight" />
      <Link color="inherit" href="https://mui.com/">
        <FormattedMessage id="companyName" />
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
};

export default Copyright;
