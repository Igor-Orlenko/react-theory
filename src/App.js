import './App.css';

import React from 'react';

//components
import {JinguLogo, NameText, Emoji } from './library/components'
import { MainPage } from './library/pages/MainPage/Main.page';

export const  App = () => {

    return (
        <div>
            <MainPage />
        </div>
    );
}