import React from 'react';
import s from './Header.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Nav} from '../nav/Nav';

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={`${sContainer.container} ${s.navContainer}`}>
                <Nav/>
            </div>
        </div>
    );
};
