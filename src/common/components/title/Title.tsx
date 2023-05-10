import React from 'react';
import s from './Title.module.css'

type TitleType = {
    span?: string
    title: string
}

export const Title = (props: TitleType) => {
    return (
        <div className={s.title}>
            <p><span>{props.span}</span></p>
            <h2>{props.title}</h2>
        </div>

    );
};
