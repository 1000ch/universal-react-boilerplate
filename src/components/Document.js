import React from 'react';
import ApplicationStore from '../stores/ApplicationStore';

export default class Document extends React.Component {
  render() {
    let title = this.props.context.getStore(ApplicationStore).getPageTitle();
    let content = { __html: this.props.markup };
    let script = { __html: this.props.state };

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <link rel="stylesheet" href="/css/app.min.css" />
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={content}></div>
          <script dangerouslySetInnerHTML={script}></script>
          <script src="/js/app.min.js"></script>
        </body>
      </html>
    );
  }
}
