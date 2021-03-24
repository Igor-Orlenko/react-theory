import './Main.css'
import React, { Fragment } from 'react';
import {JinguLogo, NameText, Emoji } from '../../components'


export const MainPage = () => {
    return(
        <div className='row'>
            <div className='column'>
                <NameText/>
                <Emoji/>
            </div>
            <JinguLogo/>
        </div>
    );
}