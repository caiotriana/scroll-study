import React from 'react';
import ReactDOM from 'react-dom';
import Lettering from './pages/Lettering';
import GlobalStyle from './style'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Lettering />
  </React.StrictMode>,
  document.getElementById('root')
);
