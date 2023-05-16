import React from 'react';
import s from './Skill.module.scss'

type SkillType = {
    title: string
    description: string
    icon: string
}

export const Skill = (props: SkillType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <img className={s.imgIcon} alt={'icon'} src={props.icon}/>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <div className={s.description}>{props.description}</div>
        </div>
    );
};
