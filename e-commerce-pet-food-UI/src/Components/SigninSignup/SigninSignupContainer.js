import React, { useState } from 'react'
import '../../CSS/SigninSignup/SigninSignupContainer.css'
import LoginForm from './LoginForm';
import SignInForm from './SignForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Success from '../SpecialPurposeElem/Success';


const SigninSignupContainer = ({ onClose, saveLogedInUser }) => {
    const [sectionOpen, setSectionOpen] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSuccess = (value) => {
        setIsSubmitted(value);
    }

    const toggleSection = () => {
        setSectionOpen(!sectionOpen);
    }

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <div className="close-btn-box">
                    <FontAwesomeIcon icon={faTimes} className="close-btn" onClick={onClose}></FontAwesomeIcon>
                </div>
                <div className="popup-inner">
                    <div className='toggle-buttons'>
                        <button className={`btn-log-sign-nav ${sectionOpen ? "add-back" : ""}`} onClick={toggleSection}>Login</button>
                        <button className={`btn-log-sign-nav ${!sectionOpen ? "add-back" : ""}`} onClick={toggleSection}>Sign in</button>
                    </div>
                    {sectionOpen && <div className='section1'>
                            <LoginForm onClose={onClose} saveLogedInUser={saveLogedInUser} />
                    </div>}
                    {!sectionOpen && <div className='section2'>
                        {isSubmitted ? (<Success />) : (<SignInForm onSuccess={handleSuccess} />)}
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default SigninSignupContainer;