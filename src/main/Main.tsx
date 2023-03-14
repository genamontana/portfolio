import React from 'react';
import s from './Main.module.css'
import sContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.greetings}>
                    <span>Привет!</span>
                    <h1>Меня зовут Геннадий Голубов.</h1>
                    <p>Я front-end разработчик</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};
