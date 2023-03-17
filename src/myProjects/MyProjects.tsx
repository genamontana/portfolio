import React from 'react';
import s from './MyProjects.module.css'
import sContainer from '../common/styles/Container.module.css';
import {Project} from './project/Project';

export const MyProjects = () => {
    return (
        <div className={s.myProjectsBlock}>
            <div className={`${sContainer.container} ${s.myProjectsContainer}`}>
                <h2 className={s.title}>Мои работы</h2>
                <div className={s.myProjects}>
                    <Project title={'Название проекта'}
                             description={'Краткое описание'}/>
                    <Project title={'Название проекта'}
                             description={'Краткое описание'}/>
                </div>
            </div>
        </div>
    );
};
