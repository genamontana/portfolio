import React from 'react';
import sContainer from '../common/styles/Container.module.scss';
import s from './Freelance.module.css'
import sButton from '../common/styles/Button.module.css'
import {Title} from '../common/components/title/Title';

export const Freelance = () => {
    return (
        <div className={s.freelanceBlock}>
            <div className={`${sContainer.container} ${s.freelanceContainer}`}>
                <Title title={'Рассматриваю варианты удаленной работы'} span={'Фриланс'}/>
                <a className={sButton.button} href={'##'}>Нанять меня</a>
            </div>
        </div>
    );
};
