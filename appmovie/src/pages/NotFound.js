import React from "react";
import { ButtonBackToHome } from '../Components/ButtonBackToHome'

export const NotFound = () => (
    <div>
        <ButtonBackToHome/>
        <h1 style={{ color: '#000', fontSize: 30 }}>404!</h1>
        <h2>No existe la página</h2>
    </div>
)