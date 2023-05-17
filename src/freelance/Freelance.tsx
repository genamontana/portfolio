import React from 'react';
import sContainer from '../common/styles/Container.module.scss';
import s from './Freelance.module.scss'
import sButton from '../common/styles/Button.module.scss'
import {Title} from '../common/components/title/Title';
import bgFreelance from '../assets/image/freelance/freelance.webp'

export const Freelance = () => {

    const bgFree = {
        backgroundImage: `url(${bgFreelance})`
    }

    return (
        <div style={bgFree}
            className={s.freelanceBlock}>
            <div className={`${sContainer.container} ${s.freelanceContainer}`}>
                <Title title={'Рассматриваю варианты удаленной работы'} span={'Фриланс'}/>
                <a className={sButton.button} href={'##'}>Нанять меня</a>
            </div>
        </div>
    );
};
