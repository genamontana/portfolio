import React from 'react';
import s from './MyProjects.module.scss'
import sContainer from '../common/styles/Container.module.css';
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import todoImage from '../assets/image/TodoList.jpeg'
import socialImage from '../assets/image/socialNetwork.jpeg'

export const MyProjects = () => {

    const socialNetwork = {
        backgroundImage: `url(${socialImage})`
    }

    const todoList = {
        backgroundImage: `url(${todoImage})`
    }

    return (
        <div className={s.myProjectsBlock}>
            <div className={`${sContainer.container} ${s.myProjectsContainer}`}>
                <Title span={'Мои работы'} title={'Некоторые из моих последних проектов'}/>
                <div className={s.myProjects}>
                    <Project style={socialNetwork}
                             title={'Название проекта'}
                             description={'Краткое описание'}/>
                    <Project style={todoList}
                        title={'Название проекта'}
                             description={'Краткое описание'}/>
                </div>
            </div>
        </div>
    );
};
