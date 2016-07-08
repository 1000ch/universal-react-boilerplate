import path from 'path';
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
import ItemService from './server/services/ItemService';
import ItemListService from './server/services/ItemListService';

const fetchrPlugin = app.getPlugin('FetchrPlugin');
fetchrPlugin.registerService(ItemService);
fetchrPlugin.registerService(ItemListService);

function prepareParsers(server) {
  server.use(cookieParser());
  server.use(bodyParser.urlencoded({ extended : true }));
  server.use(bodyParser.json());
}

function prepareAssets(server) {
  const JS_PATH = path.resolve(__dirname, '..', 'js');
  const CSS_PATH = path.resolve(__dirname, '..', 'css');
  const IMG_PATH = path.resolve(__dirname, '..', 'img');

  server.use('/js', express.static(JS_PATH));
  server.use('/css', express.static(CSS_PATH));
  server.use('/img', express.static(IMG_PATH));
  server.get('/favicon.ico', (request, response) => response.send(''));
}

function prepareRoutes(server) {
  server.use((request, response, next) => {
    const context = app.createContext();

    context.getActionContext().executeAction(navigateAction, {
      url : request.url
    }, error => {
      if (error) {
        next(error);
        return;
      }

      const documentElement = React.createElement(Document, {
        state   : `window.__CONTEXT__=${serialize(app.dehydrate(context))};`,
        context : context.getComponentContext(),
        html    : ReactDOMServer.renderToString(createElementWithContext(context))
      });
      const markup = ReactDOMServer.renderToStaticMarkup(documentElement);

      response.send(markup);
    });
  });
}

function createServer() {
  const server = express();

  prepareParsers(server);
  prepareAssets(server);
  prepareRoutes(server);

  return server;
}

const server = createServer();
const port = process.env.PORT || 3000;
console.log(`listening... ${port}`);
server.listen(port);
