import React from 'react';
import ApplicationStore from '../stores/ApplicationStore';

export default class Document extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>{this.props.context.getStore(ApplicationStore).getPageTitle()}</title>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <link rel="stylesheet" href="/css/app.min.css" />
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
          <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
          <script src="/js/app.min.js"></script>
        </body>
      </html>
    );
  }
}
