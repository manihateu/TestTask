import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import store from '../store/store';
import { lightTheme } from '../themes/lightTheme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
