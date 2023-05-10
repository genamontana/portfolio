import React from 'react';
import s from './MyProjects.module.css'
import sContainer from '../common/styles/Container.module.css';
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';

export const MyProjects = () => {
    return (
        <div className={s.myProjectsBlock}>
            <div className={`${sContainer.container} ${s.myProjectsContainer}`}>
                <Title span={'Мои работы'} title={'Некоторые из моих последних проектов'}/>
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
