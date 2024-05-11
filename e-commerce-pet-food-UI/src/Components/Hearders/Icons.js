// Icons.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Icons = ({ logedUser, togglePopup }) => {
  return (
    <div className="icons">
      {logedUser && (
        <Link to="/dashboard">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      )}
      {!logedUser && (
        <div onClick={togglePopup}>
          <FontAwesomeIcon icon={faUser} />
        </div>
      )}
      <a href="">
        <FontAwesomeIcon icon={faShoppingCart} />
      </a>
      <a href="/">
        <FontAwesomeIcon icon={faSearch} />
      </a>
    </div>
  );
};

export default Icons;