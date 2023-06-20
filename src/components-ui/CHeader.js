import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../scss/header.module.scss";
import Logo from "../sources/img/sheep.png";

function BurgerMenu(props) {
    return (
        <ul className={`${styles["burger-menu"]} ${styles[props.active ? "burger-menu_active" : ""]}`}>
            <NavLink 
                className={({isActive}) => isActive ? styles["burger-menu-link_active"] : ""} 
                to="/" 
                onClick={props.changeBurgerActive}>
                    <li>Games</li>
            </NavLink>
            <NavLink 
                className={({isActive}) => isActive ? styles["burger-menu-link_active"] : ""} 
                to="/blog" 
                onClick={props.changeBurgerActive}>
                    <li>Blog</li>
            </NavLink>
            <NavLink 
                className={({isActive}) => isActive ? styles["burger-menu-link_active"] : ""} 
                to="/community" 
                onClick={props.changeBurgerActive}>
                    <li>Community</li>
            </NavLink>
        </ul>
        )
}

function Header(props) {
    const [isBurgerActive, setIsBurgerActive] = useState(false);

    function changeBurgerActive() {
        setIsBurgerActive(!isBurgerActive);
    };

    return (
            <header className={styles["header"]}>
                <div className={styles["header-body"]}>
                    <div className={`${styles["header-burger"]} ${styles[isBurgerActive ? 'header-burger_used' : '']}`}
                        onClick={changeBurgerActive}>
                        <span></span>
                    </div>

                    <div className={styles["header__logo"]}>
                        <div className={styles["header__logo-left"]}></div>

                        <NavLink to="/" className={styles["header__logo-center"]}>
                            <img src={Logo} alt="Logo" onClick={() => setIsBurgerActive(false)} />  
                        </NavLink>
                        
                        <div className={styles["header__logo-right"]}></div>
                    </div>

                    <div className={styles["header__user"]}>
                        <span className={styles["header__user-name"]}>Username</span>
                        <NavLink to="user" className={styles["header__user-avatar"]}>
                            <img src={Logo} alt="" onClick={() => setIsBurgerActive(false)} />
                        </NavLink>
                    </div>


                </div>
                <BurgerMenu
                    active = {isBurgerActive}
                    changeBurgerActive={changeBurgerActive}
                />                  
            </header>
    );
}


export default Header;