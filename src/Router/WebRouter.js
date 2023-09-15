import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Inicio} from '../pages'

export function WebRouter(){

    return(
        <Routes>
            <Route path='/' element={<Inicio/>}/>
        </Routes>
    )

}