import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import '../public/css/bundle.css';
import '../styles/style.scss';
import '../styles/responsive.scss';

import React from "react";
import Router from 'next/router';
import NProgress from 'nprogress';
import { Provider as ReduxProvider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

import { wrapper, store } from '../redux/store';
import DefaultLayout from '../components/common/layouts/DefaultLayout';

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.Layout || DefaultLayout;
  return (
    <>
      <ReduxProvider store={store}>
        <CookiesProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CookiesProvider>
      </ReduxProvider>
    </>
  );
}


export default wrapper.withRedux(MyApp);
