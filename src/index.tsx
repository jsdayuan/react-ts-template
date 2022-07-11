import ReactDom from "react-dom/client";
import App from "./App";
import "./static/styles/common.css";

ReactDom.createRoot(document.getElementById("app")!).render(<App />);
