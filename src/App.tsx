import { ThemeProvider } from "@mui/material/styles";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { language, messages } from "./locales";
import { store } from "./redux/store/store";
import router from "./routes";
import theme from "./styles/theme";

function App() {
  return (
    <IntlProvider
      locale={navigator.language}
      defaultLocale="en"
      messages={messages[language] as Record<string, string>}
    >
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </IntlProvider>
  );
}

export default App;
