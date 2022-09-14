import * as React from 'react';
import { Link } from 'gatsby';
import{
    menuLiSubmenu,
    menuLi,
    dropDown
}from './navbar-link.module.css';

const NavbarLink = ({submenu, title, link, isMain}) => {
    const validateSubmenu = (array)=> {
        return Array.isArray(array) && array.length > 0;
    }
    const [hasSubmenu] = React.useState(validateSubmenu(submenu));
    
    const mapSubmenu = (array) => {
        return array.map(({id, submenu, title, link, isMain}) => {
            return <NavbarLink key={id} submenu={submenu} title={title} link={link} isMain={isMain} />
        })
    }
    const buildLink =()=>{
        if(hasSubmenu){
            return (
            <li className={menuLiSubmenu}>
                <Link to={link}>{title}</Link>
                <ul className={dropDown}>
                    {mapSubmenu(submenu)}
                </ul>      
            </li>);
        }else{
            return(
            <li className={menuLi}>
                <Link to={link}>{title}</Link>
            </li>);
        }
    }
    return buildLink();
}

export default NavbarLink;