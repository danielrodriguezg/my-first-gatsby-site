
import * as React from 'react';
import NavBarComponent from './navbar';
import { 
    container,
    heading
 } from './layout.module.css';

const menu = {
    items: [
        {
            id: 1,
            title: "Home 🏠",
            link: "/",
            isMain: false,
            submenu:[]
        },
        {
            id: 2,
            title: "Acerca de mi 😎",
            link: "/about",
            isMain: true,
            submenu:[]
        },
        {
            id: 3,
            title: "Servicios 🚫",
            link: "/services",
            isMain: false,
            submenu:[
                {
                    id: 4,
                    title: "Service 1",
                    link: "/service1",
                    isMain: false,
                    submenu: []
                },
                {
                    id: 5,
                    title: "Service 2",
                    link: "/service2",
                    isMain: false,
                    submenu: []
                }
            ]
        },
        {
            id: 6,
            title: "Otro submenu 🚫",
            link: "/services",
            isMain: false,
            submenu:[
                {
                    id: 7,
                    title: "Service 3",
                    link: "/service1",
                    isMain: false,
                    submenu: []
                },
                {
                    id: 8,
                    title: "Service 4",
                    link: "/service2",
                    isMain: false,
                    submenu: []
                }
            ]
        }
    ]
};


const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
        <NavBarComponent menu = {menu}/> 
        <main>
            <h1 className = {heading}>{pageTitle}</h1>
                {children}
        </main>
    </div>
  )
};

export default Layout;