
// Title component for display logo
const Title = () => (

  <a href="/">
    Hunger King
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <div className="header">
      <Title />
      <nav className="nav-items">
        <a href="/"><i className="fa fa-home" aria-hidden="true"></i></a>
        <a href="/"><i className="fa fa-info-circle" aria-hidden="true"></i></a>
        <a href="/"><i className="fa fa-phone" aria-hidden="true"></i></a>
        <a href="/"><i className="fa-solid fa-cart-shopping"></i></a>
      </nav>
    </div>
  );
};

export default Header;