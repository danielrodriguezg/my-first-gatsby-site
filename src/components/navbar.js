import * as React from 'react';
import { navigate } from 'gatsby';
import NavbarLink from './navbar-link';
import{
    navBar,
    logo,
    checkboxToggle,
    hamburguer,
    navLinks,
    menuDiv
}from './navbar.module.css';

const NavBarComponent =({menu})=> {
    const buildRoutes = (menu) => {
        return menu.items.map( ({id, submenu, title, link, isMain}) => {
            return (<NavbarLink key={id} submenu={submenu} title={title} link={link} isMain={isMain} />);
        });
    }
    const goTo = (address) => {
        navigate(address);
    }

    return (
        <nav className={navBar}>
            <div className={logo} onClick={() => goTo("/")}>Daniel 🧑🏽‍💻</div>
            <ul className={navLinks}>
                <input type='checkbox' className={checkboxToggle} id="checkbox-toggle"/>
                <label htmlFor='checkbox-toggle' className={hamburguer}>&#9776;</label>
                <div className={menuDiv}>
                    {
                    buildRoutes(menu)
                    }
                </div>
            </ul>
        </nav>
    );
}

export default NavBarComponent;