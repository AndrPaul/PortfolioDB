import React from 'react'
import LogoLight from '../../images/logoLight.svg'
import {Link} from 'react-router-dom'
const Login = () => {
    return (
        <div className='container loginPage'>
            <div className="half">
                <img src={LogoLight} alt=""/>
            </div>
            <div className="half">
                <form className="loginForm">
                    <h2>Sign in</h2>
                    <p>New user? <Link className='simpleLink' to='/register'>Create account.</Link></p>
                    <input type="text" name="username" placeholder="Username" />
                    
                    <input type="password" name="password" placeholder="Password" />
                    <button className='btn primary' type="submit">Login</button>
                </form>
            </div>
            
        </div>
    )
}

export default Login
