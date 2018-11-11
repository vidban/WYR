import React from 'react';
import logo from '../images/spiral.png';

const WelcomeLogin = () => {
    return (
        <div className="welcome-box">
            <header className="welcome-header">
                <h2>Welcome to the "Would You Rather" App!</h2>
                <h3>Please log in to Continue</h3>
            </header>
            <section>
                <img src={logo} className="App-logo" alt="man thinking" />
                <h1>Sign in</h1>
                <select name="user" id="">
                    <option value="moana">Moana</option>
                    <option value="maui">Maui</option>
                    <option value="heihei">Heihei</option>
                </select>
                <button type="submit" className="login">Enter</button>

            </section>
        </div>
    )
}

export default WelcomeLogin;
