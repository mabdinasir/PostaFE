import { ThemeProvider } from "@mui/material/styles";
import DrawerAppBar from "./features/appBar/AppBar";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DrawerAppBar />;
    </ThemeProvider>
  );
}

export default App;
