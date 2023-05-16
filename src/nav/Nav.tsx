import React from 'react';
import s from './Nav.module.scss'

type ItemsType = {
    id: number
    href: string
    value: string
}

type MenuType = {
    header: string
    items: ItemsType[]
    active: boolean
    setActive: (active: boolean) => void
}

export const Nav = (props: MenuType) => {
    return (
        <div className={props.active ? s.blur : ''}
             onClick={() => props.setActive(false)}>
            <div className={`${s.nav} ${props.active ? s.navActive : ''}`}>
                <div className={s.navContent}
                     onClick={e => e.stopPropagation()}>
                    <div className={s.navHeader}>{props.header}</div>
                    <ul>
                        {props.items.map(i =>
                            <li key={i.id}>
                                <a href={i.href}>{i.value}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};
