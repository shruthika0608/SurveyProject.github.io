import React, { useState } from 'react';
import '../signup.css'; // Import CSS file

function LoginForm() {
  const [emailArray, setEmailArray] = useState([]);
  const [passwordArray, setPasswordArray] = useState([]);
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleRegister = () => {
    // Your register logic here
  };

  const handleLogin = () => {
    // Your login logic here
  };

  const handleForgotPassword = () => {
    // Your forgot password logic here
  };

  return (
    <div id="container">
      <div id="tabs">
        <p id="lt" className={`tabs ${activeTab === 'login' ? 'active' : ''}`} onClick={() => handleTabChange('login')}>Log in</p>
        <p id="rt" className={`tabs ${activeTab === 'register' ? 'active' : ''}`} onClick={() => handleTabChange('register')}>Register</p>
        <div id="clear"></div>
      </div>

      <div id="cont">
        <div id="login" className={`comm ${activeTab === 'login' ? 'active' : ''}`}>
          <h3>Sign in</h3>
          <input id="se" type="email" placeholder="Email" required />
          <input id="sp" type="password" placeholder="Password" required />
          <input type="submit" onClick={handleLogin} value="Submit" />
          <p onClick={() => handleTabChange('forgot')}>Forget Password?</p>
        </div>

        <div id="register" className={`comm ${activeTab === 'register' ? 'active' : ''}`}>
          <h3>Register</h3>
          <input id="re" type="email" placeholder="Email" required />
          <input id="rp" type="password" placeholder="Password" required />
          <input id="rrp" type="password" placeholder="Re write Password" required />
          <input type="submit" onClick={handleRegister} value="Submit" />
        </div>

        <div id="forgot" className={`comm ${activeTab === 'forgot' ? 'active' : ''}`}>
          <h3>Forgot Password</h3>
          <div>
            <input id="fe" type="email" placeholder="Email" required />
            <input type="submit" onClick={handleForgotPassword} value="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
