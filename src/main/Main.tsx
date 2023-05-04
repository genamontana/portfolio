import React from 'react';
import s from './Main.module.css'
import ava from '../foto/ava_b&w.jpeg'
import sContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${sContainer.container} ${s.mainContainer}`}>
                <div className={s.greetings}>
                    <span>Привет!</span>
                    <h1>Меня зовут Геннадий Голубов.</h1>
                    <p>Я front-end разработчик</p>
                </div>
                <div className={s.photo}>
                    <img className={s.ava}
                        src={ava} alt="ava"/>
                </div>
            </div>
        </div>
    );
};
