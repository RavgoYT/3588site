import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SchedulePage from "./pages/SchedulePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
