import React from 'react';
import './Logo.css';
import Logo from '../../assets/images/logo.svg';

const logo = (props) => (
    <div className="Logo" style={{ height: props.height }} >
        <img src={Logo} alt="MyBurger" />
    </div>
);

export default logo;