import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { theme } from "./ownTheme";
import { ThemeProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
