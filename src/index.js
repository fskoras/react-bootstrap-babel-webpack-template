import ReactDOM from "react-dom/client";

// Import our custom CSS
import "./scss/styles.scss"

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import the App
import App from "./App";

// Render the App
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
