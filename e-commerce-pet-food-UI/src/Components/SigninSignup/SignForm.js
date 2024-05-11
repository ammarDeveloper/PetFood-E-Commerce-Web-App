import React, {useState} from 'react';
import '../../CSS/SigninSignup/LoginSigninForm.css';
// const fetch =  require('node-fetch');

const SignInForm = ({onSuccess}) => {
    const restApi = process.env.REACT_APP_REST_API

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`${restApi}api/signin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    firstName:firstName, 
                    lastName:lastName, 
                    phone:phoneNumber, 
                    email:email, 
                    password:password })
            });
            
            setFirstName('')
            setLastName('')
            setPhoneNumber('')
            setEmail('');
            setPassword('');
            

            if (response.ok) {
                onSuccess(true);
                response.json()
                .then(res => {
                    console.log(res.body);
                })
            } else {
                response.json()
                .then(res => {
                    setErrorMsg(res.errors)
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="sign-in-form">
            <form className='form-class' onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                {errorMsg !== '' && <p className='errormsg'>{JSON.stringify(errorMsg)}</p>}
                <div className="input-container">
                    <input className='form-input' type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="input-container">
                    <input className='form-input' type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="input-container">
                    <input className='form-input' type="phone" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                </div>

                <div className="input-container">
                    <input className='form-input' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-container">
                    <input className='form-input' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <button className='logsignbutton' type="submit">Sign In</button>
            </form>
            <div className='loginsignimg bar-left'>
                <img style={{ width: "80%" }} src='images/signimg.png'></img>
            </div>
        </div>
    );
};

export default SignInForm;
