import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav style={{ padding: 20 }}>
    <Link to="/" style={{ marginRight: 10 }}>
      Hem
    </Link>
    <Link to="/skills" style={{ marginRight: 10 }}>
      Mina skills
    </Link>
    <Link to="/add">Lägg till skills</Link>
  </nav>
);
