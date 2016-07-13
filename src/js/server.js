import path from 'path';
import serialize from 'serialize-javascript';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createElementWithContext } from 'fluxible-addons-react';
import { navigateAction } from 'fluxible-router';
import Server from './server/Server';
import app from './app';
import Document from './components/Document';
import ItemService from './server/services/ItemService';
import ItemListService from './server/services/ItemListService';

const fetchrPlugin = app.getPlugin('FetchrPlugin');
fetchrPlugin.registerService(ItemService);
fetchrPlugin.registerService(ItemListService);

const server = new Server();
server.addStatic('/js', path.resolve(__dirname, '..', 'js'));
server.addStatic('/css', path.resolve(__dirname, '..', 'css'));
server.addStatic('/img', path.resolve(__dirname, '..', 'img'));
server.addMiddleware((request, response, next) => {
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
server.listen(process.env.PORT || 3000);
