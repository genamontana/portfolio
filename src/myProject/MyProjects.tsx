import React from 'react';
import s from './MyProjects.module.css'
import sContainer from '../common/styles/Container.module.css';

export const MyProjects = () => {
    return (
        <div className={s.myProjectsBlock}>
            <div className={`${sContainer.container} ${s.myProjectsContainer}`}>
                <h2 className={s.title}>Мои работы</h2>

            </div>
        </div>
    );
};
