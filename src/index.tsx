import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "app/providers/theme";
import "shared/config/i18n/i18n";
import { ErrorBoundary } from "app/providers/ErrorBoundary";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App /> 
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
)