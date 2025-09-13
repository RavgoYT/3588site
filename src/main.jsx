// main.jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<div className="min-h-screen bg-black text-white overflow-x-hidden font-'TT Norms Pro'">
				<Header />
				<main className="w-screen overflow-hidden">
					<App />
				</main>
			</div>
			<Footer />
		</BrowserRouter>
	</StrictMode>
);
