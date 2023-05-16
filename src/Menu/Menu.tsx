import React from 'react';
import s from './Menu.module.scss'

type ItemsType = {
    href: string
    value: string
    icon: string
}

type MenuType = {
    header: string
    items: ItemsType[]
    active: boolean
    setActive: (active: boolean) => void
}


const Menu = (props: MenuType) => {
    return (
        <div className={props.active ? s.menuActive : s.menu}
             onClick={() => props.setActive(false)}>
            <div className={s.blur}/>
            <div className={s.menuContent}
                 onClick={e => e.stopPropagation()}>
                <div className={s.menuHeader}>{props.header}</div>
                <ul>
                    {props.items.map(item =>
                        <li>
                            <a href={item.href}>{item.value}</a>
                            <span className="material-symbols-outlined">
                                    {item.icon}
                                </span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Menu;