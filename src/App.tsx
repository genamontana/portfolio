import React from 'react';
import './App.css';
import {HeaderTest} from './headerTest/HeaderTest';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {MyProjects} from './myProjects/MyProjects';
import {Freelance} from './freelance/Freelance';
import {Contacts} from './contacts/Contacts';
import {Footer} from './footer/Footer';

function App() {
    return (
        <div className="App">
            <HeaderTest/>
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <Freelance/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
