import React, { useState }  from 'react';
import '../../CSS/SigninSignup/LoginSigninForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({onClose, saveLogedInUser}) => {
    const restApi = process.env.REACT_APP_REST_API

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`${restApi}api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email, 
                    password: password })
            });

            setEmail('');
            setPassword('');
            setErrorMsg('');

            if (response.ok) {
                onClose();
                response.json().then(res => {
                    if (res.body) {
                        saveLogedInUser(res.body);
                        console.log(res.body);
                        navigate('/dashboard', {state: res.body});
                    }
                })
            } else {
                response.json().then(res => {
                    console.log(res.body)
                    setErrorMsg(res.body.message)
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="login-form">
            <div className='loginsignimg bar-right'>
                <img style={{width:"80%"}} src='images/loginimg.png'></img>
            </div>
            <form className='form-class' onSubmit={handleSubmit}>
                <h2>Login</h2>
                {errorMsg !== '' && <p className='errormsg'>{JSON.stringify(errorMsg)}</p>}
                <div className="input-container">
                    <input className='form-input' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-container">
                    <input className='form-input' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div style={{width: "100%"}}>
                    <a href='/'><p>Forgot Password</p></a>
                </div>
                <button className='logsignbutton'>Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
