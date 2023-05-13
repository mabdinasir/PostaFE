import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
import App from "./App";
import { language, messages } from "./locales";

const isRtl = language === "ar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <IntlProvider
      locale={navigator.language}
      defaultLocale="en"
      messages={messages[language]}
    >
      <div dir={isRtl ? "rtl" : "ltr"}>
        <App />
      </div>
    </IntlProvider>
  </React.StrictMode>
);
