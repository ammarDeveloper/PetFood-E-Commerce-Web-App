import '../../CSS/Headers/Navbar.css';
import Logo from './Logo';
import Links from './Links';
import Icons from './Icons';

const Navbar = ({ setSelectedCategory, togglePopup, logedUser, categories }) => {
  console.log('checking user logged in: ' + logedUser);

  // Render the navigation bar
  return (
    <nav className="navbar">
      <Logo />
      <Links setSelectedCategory={setSelectedCategory} />
      <Icons logedUser={logedUser} togglePopup={togglePopup} />
    </nav>
  );
};

export default Navbar;