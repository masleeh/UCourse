import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "app/providers/theme";
import "shared/config/i18n/i18n";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { StoreProvider } from "app/providers/StoreProvider";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App /> 
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
)