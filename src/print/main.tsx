import { createRoot } from "react-dom/client"
import { PrintPortfolio } from "./PrintPortfolio"
import "./print.css"

const root = document.getElementById("root")
if (root) createRoot(root).render(<PrintPortfolio />)
