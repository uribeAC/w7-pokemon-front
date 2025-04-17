import { NavLink } from "react-router";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <NavLink className="navigation__link" to="/pokedex">
        Pokedex
      </NavLink>
      <NavLink className="navigation__link" to="/add-pokemon">
        Add Pokemon
      </NavLink>
    </nav>
  );
};

export default Navigation;
