import React from 'react';
import s from './Skills.module.css'
import sContainer from '../common/styles/Container.module.scss'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title  title={'Мои навыки'}/>
                <div className={s.skills}>
                    <Skill title={'JS'}
                           description={'Подробное описание навыка'}/>
                    <Skill title={'HTML'}
                           description={'Подробное описание навыка'}/>
                    <Skill title={'CSS'}
                           description={'Подробное описание навыка'}/>
                </div>
            </div>
        </div>
    );
};
