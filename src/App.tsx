import { ThemeProvider } from "styled-components";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ContextsProvider } from "./contexts";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />

			<ContextsProvider>
				<Transactions />
			</ContextsProvider>
		</ThemeProvider>
	);
}
