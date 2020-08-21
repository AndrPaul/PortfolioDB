import React from 'react'
import LogoLight from '../../images/logoLight.svg'
import {Link} from 'react-router-dom'
const Register = () => {
    return (
        <div className='container loginPage'>
            <div className="half">
                <img src={LogoLight} alt=""/>
            </div>
            <div className="half">
                <form className="loginForm">
                    <h2>Register</h2>
                    <p>Already have an account ? <Link className='simpleLink' to='/login'>Sign in.</Link></p>
                    <input type="email" name="username" placeholder="E-mail" />
                    
                    <input type="password" name="password" placeholder="Password" />
                    <button className='btn primary' type="submit">Register</button>
                </form>
            </div>
            
        </div>
    )
}

export default Register
