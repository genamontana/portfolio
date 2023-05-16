import React, {useState} from 'react';
import s from './Header.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Nav} from '../nav/Nav';
import logo from '../assets/image/logo/logo.png'

export const Header = () => {
    const [menuActive, setMenuActive] = useState(false)

    const items = [
        {value: 'Главная', href: '/main'},
        {value: 'Скиллы', href: '/skills'},
        {value: 'Работы', href: '/work'},
        {value: 'Контакты', href: '/contacts'},
    ]

    const openCloseMenu = ()=>{
        setMenuActive(!menuActive)
    }

    return (
        <div className={s.header}>
            <div className={`${sContainer.container} ${s.navContainer}`}>
                <div className={s.information}>
                    <img src={logo} className={s.logo}></img>
                    <span className={s.iconTel}></span>
                    <a className={s.tel}
                        href="tel:+79281819457">+7(928)181-94-57</a>
                </div>
                <Nav/>
            </div>
        </div>
    );
};
