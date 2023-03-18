import React from 'react';
import s from './Footer.module.css'
import sContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Голубов Геннадий</h2>
                <div className={s.socialContainer}>
                    <div className={s.social}></div>
                    <div className={s.social}></div>
                    <div className={s.social}></div>
                    <div className={s.social}></div>
                </div>
                <span>© 2023 Все права защищены</span>
            </div>
        </div>
    );
};

