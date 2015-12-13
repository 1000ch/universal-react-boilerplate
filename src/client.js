import ReactDOM from 'react-dom';
import React from 'react';
import { createElementWithContext } from 'fluxible-addons-react';
import app from './app';

const dehydratedState = window.App;

window.React = ReactDOM;

app.rehydrate(dehydratedState, (error, context) => {
  if (error) {
    throw error;
  }
  window.context = context;
  ReactDOM.render(
    createElementWithContext(context),
    document.getElementById('app'),
    () => console.log('React Rendered')
  );
});
