import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import WithRedux from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import AppLayout from '../components/AppLayout';
import reducer from '../reducer/index';
import rootSaga from '../saga';

import './../components/DetailContent/ProfileSection/swiper.css';
import 'swiper/css/swiper.css';

const MovieProject = ({ Component, store, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Movie API Project</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
        <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css"></link>
        <script src="https://unpkg.com/react-id-swiper@3.0.0/lib/react-id-swiper.min.js"></script>
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
};

const configureStroe = (initalState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
  ? compose( 
    applyMiddleware(...middlewares))
  : compose(
    applyMiddleware(...middlewares), 
      !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
  );
  const store = createStore(reducer, initalState, enhancer);
  sagaMiddleware.run(rootSaga); 
  return store;
};

MovieProject.getInitialProps = async (context) => {
  const { ctx, Component } = context;
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

MovieProject.propTypes = {
  Component: PropTypes.elementType.isRequired,
  store: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default WithRedux(configureStroe)(MovieProject);