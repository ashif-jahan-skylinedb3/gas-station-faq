import { NavLink } from "react-router";
export default function LanguageSwitcher() {
  return (
    <div className="language-bar">
      <div className="language-bar-inner">
        <span className="language-label">Language / ভাষা</span>

        <nav className="language-switcher" aria-label="Select language">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `language-option ${isActive ? "active" : ""}`
            }
          >
            English
          </NavLink>

          <NavLink
            to="/bn"
            className={({ isActive }) =>
              `language-option ${isActive ? "active" : ""}`
            }
          >
            বাংলা
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
