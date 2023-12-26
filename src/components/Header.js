import { Link } from "react-router-dom";
// Title component for display logo
const Title = () => (

  <Link to="/" className="link">
    Hunger King
  </Link>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <div className="header">
      <Title />
      <nav className="nav-items">
        <Link className="link" to="/"><i className="fa fa-home" aria-hidden="true"></i> Home</Link>
        <Link className="link" to="/about"><i className="fa fa-info-circle" aria-hidden="true"></i> About</Link>
        <Link className="link" to="/contact"><i className="fa fa-phone" aria-hidden="true"></i> Contact</Link>
        <Link className="link" to="/cart"><i className="fa-solid fa-cart-shopping" aria-hidden="true"></i> Cart</Link>
      </nav>
    </div>
  );
};

export default Header;