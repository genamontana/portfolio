import React from 'react';
import s from './Contacts.module.scss'
import sContainer from '../common/styles/Container.module.scss';
import sButton from '../common/styles/Button.module.scss'
import {Title} from '../common/components/title/Title';

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Title title={'Контакты'} span={'Давайте свяжемся'}/>
                <form action={'##'} className={s.form}>
                    <input type="text" placeholder={'Name'} className={s.name}/>
                    <input type="email" placeholder={'Email'} className={s.email}/>
                    <textarea placeholder={'Your question...'} className={s.text}></textarea>
                    <button type={'submit'} className={sButton.button}>Отправить</button>
                </form>
            </div>
        </div>
    );
};
