import React from 'react'
import '../../CSS/Footers/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <h2 className='text-align-start'>Company</h2>
                <a className='text-align-start links-footer'  href='/'>Who We Are</a>
                <a className='text-align-start links-footer' href='/'>Find a Bliss Near You</a>
                <a className='text-align-start links-footer' href='/'>Shop</a>
                <a className='text-align-start links-footer' href='/'>Privacy Policy</a>
                <a className='text-align-start links-footer' href='/'>Terms & Conditions</a>
                <a className='text-align-start links-footer' href='/'>Accessibility Statement</a>
            </div>
            <div>
                <h2 className='text-align-start'>FOR YOU</h2>
                <a className='text-align-start links-footer' href='/'>Gift Cards</a>
                <a className='text-align-start links-footer' href='/'>Contact Us</a>
                <a className='text-align-start links-footer' href='/'>Shipping</a>
                <a className='text-align-start links-footer' href='/'>Returns</a>
                <a className='text-align-start links-footer' href='/'>Payment & Gift Cards</a>
            </div>
            <div>

                <h2 className='text-align-start'>QUICK SHOP</h2>
                <a className='text-align-start links-footer' href='/'>Skincare</a>
                <a className='text-align-start links-footer' href='/'>Body Care</a>
                <a className='text-align-start links-footer' href='/'>Fabgirl</a>
                <a className='text-align-start links-footer' href='/'>Travel Size</a>
                <a className='text-align-start links-footer' href='/'>Serums</a>
                <a className='text-align-start links-footer' href='/'>SPF</a>
                <a className='text-align-start links-footer' href='/'>Accessories</a>
            </div>
            <div>
                <h2 className='text-align-start'>Get In Touch</h2>
                <p className='text-align-start'>Sign up for our newsletter to recieve 20% off your first order!</p>
                <div>
                    <input className='inputInFooter' type='text' placeholder='Enter your email'></input>
                    <button className='btn'>Submit</button>
                </div>
                <p className='text-align-start'>By signing up for our newsletter, you agree to our terms and privacy policy.</p>
            </div>
        </div>
    )
}

export default Footer
