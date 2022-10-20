import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { store } from '../app/store';
import '../styles/globals.css';
import Navbar from './layout/Navbar';

function MyApp({
  Component, pageProps,
}: AppProps) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;