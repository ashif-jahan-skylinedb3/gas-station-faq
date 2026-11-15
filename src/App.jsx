import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import LanguageSwitcher from "./components/LanguageSwitcher.jsx";
import BanglaHomePage from "./pages/BanglaHomePage.jsx";
export default function App() {
  return (
    <>
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bn" element={<BanglaHomePage />} />
      </Routes>
    </>
  );
}
