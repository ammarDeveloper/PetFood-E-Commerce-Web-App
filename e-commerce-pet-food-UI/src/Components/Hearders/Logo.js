import { Link } from "react-router-dom";

// Logo.js
const Logo = () => {
    return (
        <div className="logo">
            <Link to='/'> 
                <img src="/images/logo_img.png" alt="Logo" />
            </Link>
        </div>
    );
};

export default Logo;