import React from 'react';
import s from './Main.module.scss'
import ava from '../assets/image/mainFoto/ava_b&w.jpeg'
import sContainer from '../common/styles/Container.module.scss'
import {useTyped} from './useTyped';

export const Main = () => {
    const { ref }  = useTyped(
        ["Я фронтенд разработчик.", "Буду всегда рад с Вами связатся."]
    )

    return (
        <div className={s.mainBlock}>
            <div className={`${sContainer.container} ${s.innerWrapper}`}>

                    <div className={s.greetings}>
                        <span className={s.hello}>Привет!</span>
                        <h1>Меня зовут Геннадий Голубов.</h1>
                        <span className={s.front} ref={ref} />
                    </div>
                    <div className={s.photo}>
                        <img className={s.ava}
                             src={ava} alt="ava"/>
                    </div>

            </div>
        </div>
    );
};
