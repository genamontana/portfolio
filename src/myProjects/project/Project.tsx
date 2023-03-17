import React from 'react';
import s from './Project.module.css';
import sButton from '../../common/styles/Button.module.css'

type ProjectType = {
    title: string
    description: string
}

export const Project = (props: ProjectType) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.projectImage}>
                <a className={sButton.button}
                    href={'##'}>Смотреть</a>
            </div>
            <h3>{props.title}</h3>
            <div className={s.description}>{props.description}</div>
        </div>
    );
};
