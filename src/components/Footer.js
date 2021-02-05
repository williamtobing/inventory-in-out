import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link className="a-tag" to="/about">
        About
      </Link>
    </footer>
  );
};

export default Footer;
