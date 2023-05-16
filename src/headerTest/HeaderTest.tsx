import React, {useState} from 'react';
import s from './HeaderTest.module.css'
import Menu from '../Menu/Menu';


export const HeaderTest = () => {
    const [menuActive, setMenuActive] = useState(false)

    const items = [
        {value: 'Главная', href: '/main', icon: 'star_half'},
        {value: 'Услуги', href: '/service', icon: 'html'},
        {value: 'Магазин', href: '/main', icon: 'token'},
        {value: 'JS', href: '/main', icon: 'javascript'},
    ]
    const openCloseMenu = ()=>{
        setMenuActive(!menuActive)
    }

    return (
        <nav className={s.nav}>
            <div className={s.burgerBtn} onClick={openCloseMenu}>
                <span/>
            </div>
            <Menu active={menuActive} setActive={setMenuActive} header={'Бургер меню'} items={items}/>
        </nav>
    );
};
