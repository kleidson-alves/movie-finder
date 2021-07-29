import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './hooks';

import Routes from './routes';

import GlobalStyle from './styles/global';
import theme from './styles/themes/default';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Routes />
          <GlobalStyle />
        </ThemeProvider>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
