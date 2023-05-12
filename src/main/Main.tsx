import React from 'react';
import s from './Main.module.css'
import ava from '../foto/ava_b&w.jpeg'
import sContainer from '../common/styles/Container.module.css'
import {useTyped} from './useTyped';

export const Main = () => {
    const { ref }  = useTyped(["Я фронтенд разработчик.", "Буду всегда рад с Вами связатся."])

    return (
        <div className={s.mainBlock}>
            <div className={`${sContainer.container} ${s.mainContainer}`}>
                <div className={s.greetings}>
                    <span>Привет!</span>
                    <h1>Меня зовут Геннадий Голубов.</h1>
                    <span ref={ref} />
                </div>
                <div className={s.photo}>
                    <img className={s.ava}
                        src={ava} alt="ava"/>

                </div>
            </div>
        </div>
    );
};
