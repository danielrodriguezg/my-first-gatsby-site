import * as React from 'react';
import { navigate } from 'gatsby';
import NavbarLink from './navbar-link';
import{
    navBar,
    logo,
    checkboxToggle,
    hamburguer,
    navLinks,
    menuDiv,
    heading,
    crossClose,
    divRoutes
}from './navbar.module.css';

const NavBarComponent =({menu, pageTitle})=> {
    const buildRoutes = (menu) => {
        return menu.items.map( ({id, submenu, title, link, isMain}) => {
            return (<NavbarLink key={id} submenu={submenu} title={title} link={link} isMain={isMain} />);
        });
    }

    return (
        <nav className={navBar}>
            <div className={logo} onClick={() => navigate("/")}>Daniel 🧑🏽‍💻</div>
            <h1 className = {heading}>{pageTitle}</h1>
            <ul className={navLinks}>
                <input type='checkbox' className={checkboxToggle} id="checkbox-toggle"/>
                <label htmlFor='checkbox-toggle' className={hamburguer}>&#9776;</label>
                <div className={menuDiv}>
                    <label htmlFor='checkbox-toggle' className={crossClose}>X</label>
                    <div className={divRoutes}>
                        {buildRoutes(menu)}
                    </div>
                </div>
            </ul>
        </nav>
    );
}

export default NavBarComponent;