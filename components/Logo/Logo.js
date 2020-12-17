import React from 'react'

import burgerLogo from '../../assets/images/logo_en_burger.png'
import classes from './Logo.css'

const logo = ( props ) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="enBurger" />
    </div>
);
export default logo;