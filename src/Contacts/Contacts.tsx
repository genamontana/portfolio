import React from 'react';
import s from './Contacts.module.css'
import sContainer from '../common/styles/Container.module.css';
import sButton from '../common/styles/Button.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Контакты</h2>
                <form action={'##'} className={s.form}>
                    <input type="text" className={s.name}/>
                    <input type="text" className={s.surname}/>
                    <textarea className={s.text}></textarea>
                </form>
                <a className={sButton.button} href={'##'}>Отправить</a>
            </div>
        </div>
    );
};
