import React from 'react';
import s from './Footer.module.scss'
import sContainer from '../common/styles/Container.module.scss'
import inst from '../assets/image/socialFooter/inst.png'
import telegram from '../assets/image/socialFooter/telega.png'
import vk from '../assets/image/socialFooter/vk.png'
import wats from '../assets/image/socialFooter/watsApp.png'

export const Footer = () => {
    const iconSocial = [
        {id: 1, img: inst},
        {id: 2, img: telegram},
        {id: 3, img: vk},
        {id: 4, img: wats},
    ]

    return (
        <div className={s.footer}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Голубов Геннадий</h2>
                <div className={s.socialContainer}>
                    {iconSocial.map(icon =>
                        <div key={icon.id} className={s.social}>
                            <img src={icon.img} alt="socialIcon"/>
                        </div>
                    )}
                </div>
                <span>© 2023 Все права защищены</span>
            </div>
        </div>
    );
};

