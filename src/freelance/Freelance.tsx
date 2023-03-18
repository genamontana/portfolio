import React from 'react';
import sContainer from '../common/styles/Container.module.css';
import s from './Freelance.module.css'
import sButton from '../common/styles/Button.module.css'

export const Freelance = () => {
    return (
        <div className={s.freelanceBlock}>
            <div className={`${sContainer.container} ${s.freelanceContainer}`}>
                <h2 className={s.title}>Рассматриваю варианты удаленной работы</h2>
                <a className={sButton.button} href={'##'}>Нанять меня</a>
            </div>
        </div>
    );
};
