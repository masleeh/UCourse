import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import ThemeProvider from "./theme/Theme.provider";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <ThemeProvider>
            <App /> 
        </ThemeProvider>
    </BrowserRouter>
)