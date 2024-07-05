import { ReactNode } from "react";
import { TransactionsProvider } from "./TransactionsContext";

interface ContextsProviderProps {
	children: ReactNode;
}

export function ContextsProvider({ children }: ContextsProviderProps) {
	return <TransactionsProvider>{children}</TransactionsProvider>;
}
