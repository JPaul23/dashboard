import React from 'react';
import ReacDom from 'react-dom';

import App from './App';
import './index.css';
import { ContexProvider } from './contexts/ContextProvider';

ReacDom.render(
    <ContexProvider>
        <App />
    </ContexProvider>
    , document.getElementById('root'));