import { StyleSheetManager, ThemeProvider } from "styled-components";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import isPropValid from "@emotion/is-prop-valid";

export function App() {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        <TransactionsProvider>
          <Transactions />
        </TransactionsProvider>
      </ThemeProvider>
    </StyleSheetManager>
  );
}
