import VerticalNav from "./layout/Nav";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme(); // You can customize the theme here

function App() {
  return (
    <ThemeProvider theme={theme}>
      <VerticalNav />
    </ThemeProvider>
  );
}
export default App;
