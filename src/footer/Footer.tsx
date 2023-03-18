import React from 'react';
import s from './Footer.module.css'
import sContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2>Голубов Геннадий</h2>
                <div className={s.socialContainer}>
                    <div className={s.social}></div>
                    <div className={s.social}></div>
                    <div className={s.social}></div>
                    <div className={s.social}></div>
                </div>
                <span>Все права защищены</span>
            </div>
        </div>
    );
};

