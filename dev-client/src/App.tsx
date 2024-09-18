import { ThemeProvider as EmotionProvider} from "@emotion/react";
import { ThemeProvider } from "@mui/material"
import { GlobalStyles } from "./GlobalStyles";
import { theme } from "./utils/theme";
import Routes from "./Routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <EmotionProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <Routes />
      </EmotionProvider>
    </ThemeProvider>
  )
}

export default App
