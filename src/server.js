import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import serialize from 'serialize-javascript';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createElementWithContext } from 'fluxible-addons-react';
import { navigateAction } from 'fluxible-router';
import app from './app';
import Document from './components/Document';

const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cookieParser());

server.use((request, response, next) => {
  const context = app.createContext();

  context.getActionContext().executeAction(navigateAction, {
    url : request.url
  }, error => {
    if (error) {
      return next(error);
    }
    const exposeState = `window.App=${serialize(app.dehydrate(context))};`;
    const markup = ReactDOMServer.renderToString(createElementWithContext(context));
    const documentElement = React.createElement(Document, {
      state   : exposeState,
      context : context.getComponentContext(),
      markup  : markup
    });
    const html = ReactDOMServer.renderToStaticMarkup(documentElement);

    response.send(html);
  });
});

server.listen(process.env.PORT || 5000);
