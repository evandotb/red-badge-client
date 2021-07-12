import React from 'react';
import HeaderLogo from './Logo';
import Username from './Username';
import Logout from '../Logout/Logout';


const Header = () => (
<div>

        <HeaderLogo />
        <Username />
        <Logout />

</div>
);

export default Header;