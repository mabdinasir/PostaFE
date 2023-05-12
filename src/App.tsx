import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import MiniDrawer from "./features/drawer/MiniDrawer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MiniDrawer />
    </ThemeProvider>
  );
}

export default App;
