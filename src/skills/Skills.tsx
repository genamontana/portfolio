import React from 'react';
import s from './Skills.module.scss'
import sContainer from '../common/styles/Container.module.scss'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';
import html from '../assets/image/skills/html.png'
import css from '../assets/image/skills/css.png'
import js from '../assets/image/skills/js.png'
import ts from '../assets/image/skills/ts.png'
import react from '../assets/image/skills/react.png'
import redux from '../assets/image/skills/redux.png'

export const Skills = () => {
    const skills = [
        {
            id: 1,
            title: 'HTML',
            description: 'Углубленные познания в стандартизированном языке гипертекстовой разметки документов для просмотра веб-страниц в браузере.',
            icon: html
        },
        {
            id: 2,
            title: 'CSS/SCSS',
            description: 'Граммотное использование стилей для веб-страниц, расположения отдельных блоков и других аспектов представления внешнего вида этих веб-страниц.',
            icon: css
        },
        {
            id: 3,
            title: 'JavaScript',
            description: 'Реализация любых сценариев для придания интерактивности веб-страницам',
            icon: js
        },
        {
            id: 4,
            title: 'TypeScript',
            description: 'Мои знание данного языка программирования помогут в разработки веб-приложений и расширяюширят возможности JavaScript',
            icon: ts
        },
        {
            id: 5,
            title: 'React',
            description: 'React может использоваться для разработки одностраничных и мобильных приложений. Его цель — предоставить высокую скорость разработки, простоту и масштабируемость.',
            icon: react
        },
        {
            id: 6,
            title: 'Redux',
            description: 'Умение пользоватся данной библиотекой позволяет значительно упростить передачу данных хранилища через контекст.',
            icon: redux
        },
    ]

    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title title={'Мои навыки'}/>
                <div className={s.skills}>
                    {skills.map(skill =>
                        <Skill key={skill.id}
                               icon={skill.icon}
                               title={skill.title}
                               description={skill.description}/>
                    )}

                </div>
            </div>
        </div>
    );
};
