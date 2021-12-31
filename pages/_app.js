import '../styles/globals.css';
import Layout from '../components/layout/layout';
import Head from 'next/head';

import { store } from '../store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
