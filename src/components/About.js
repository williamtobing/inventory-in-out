import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h4>Versin 1.0.0</h4>
      <Link className="a-tag" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default About;
