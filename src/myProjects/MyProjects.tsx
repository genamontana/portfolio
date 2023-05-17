import React from 'react';
import s from './MyProjects.module.scss'
import sContainer from '../common/styles/Container.module.scss';
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import todoImage from '../assets/image/work/TodoList.jpeg'
import socialImage from '../assets/image/work/socialNetwork.jpeg'

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
                             title={'Social Network'}
                             description={'Реализация социальной сети на TS с использованием Redux'}/>
                    <Project style={todoList}
                             title={'Todo List'}
                             description={'Мой Todo List на Type Script с применением к нему Material UI'}/>
                </div>
            </div>
        </div>
    );
};
