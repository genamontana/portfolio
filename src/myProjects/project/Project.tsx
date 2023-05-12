import React from 'react';
import s from './Project.module.css';
import sButton from '../../common/styles/Button.module.css'

type ProjectType = {
    style: { backgroundImage: string }
    title: string
    description: string
}

export const Project = (props: ProjectType) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.projectImage} style={props.style}>
                <a className={sButton.button}
                   href={'##'}>Смотреть</a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.title}>{props.title}</h3>
                <div className={s.description}>{props.description}</div>
            </div>
        </div>
    );
};
