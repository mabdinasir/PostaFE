import { ThemeProvider } from "@mui/material/styles";
import { IntlProvider } from "react-intl";
import { RouterProvider } from "react-router-dom";
import { language, messages } from "./locales";
import router from "./routes";
import theme from "./styles/theme";

function App() {
  return (
    <IntlProvider
      locale={navigator.language}
      defaultLocale="en"
      messages={messages[language] as Record<string, string>}
    >
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;
