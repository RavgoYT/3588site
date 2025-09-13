import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SchedulePage from "./pages/SchedulePage";
import GalleryPage from "./pages/GalleryPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
