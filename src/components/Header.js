import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          onClick={onAdd}
          color={showAdd ? "#fe6610" : "#fe7f2d"}
          text={showAdd ? "Close" : "Add"}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Inventory",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
