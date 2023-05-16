import React, {useState} from 'react';
import s from './Header.module.scss'
import {Nav} from '../nav/Nav';
import logo from '../assets/image/logo/logo.png'

export const Header = () => {
    const [menuActive, setMenuActive] = useState(false)

    const items = [
        {id:1, value: 'Главная', href: '/main'},
        {id:2, value: 'Скиллы', href: '/skills'},
        {id:3, value: 'Работы', href: '/work'},
        {id:4, value: 'Контакты', href: '/contacts'},
    ]

    const openCloseMenu = ()=>{
        setMenuActive(!menuActive)
    }

    return (
        <div className={s.header}>
            <div className={s.navContainer}>
                <div className={s.information}>

                    <img alt={'logo'} src={logo} className={s.logo}></img>
                    <span className={s.iconTel}></span>
                    <a className={s.tel}
                        href="tel:+79281819457">+7(928)181-94-57</a>
                </div>
                <Nav active={menuActive}
                     setActive={setMenuActive}
                     header={'Front-End Web Development'}
                     items={items}/>

                <div className={s.burgerBtn} onClick={openCloseMenu}>
                    <span/>
                </div>
            </div>
        </div>
    );
};
