import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "app/providers/theme";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <ThemeProvider>
            <App /> 
        </ThemeProvider>
    </BrowserRouter>
)