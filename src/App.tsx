import React from 'react';
import './App.css';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {MyProjects} from './myProjects/MyProjects';
import {Freelance} from './freelance/Freelance';
import {Contacts} from './Contacts/Contacts';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <Freelance/>
            <Contacts/>
        </div>
    );
}

export default App;
