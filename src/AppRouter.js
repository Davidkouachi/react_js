import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Acceuil from './Acceuil'
import Formulaire from './Formulaire'
import Liste from './Liste'

import { Button } from 'reactstrap';

function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/acceuil" element={
                    <Acceuil />
                } />
                <Route path="formulaire" element={
                    <Formulaire />
                } />
                <Route path="liste" element={
                    <Liste />
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;