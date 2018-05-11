import React from 'react';
import PropTypes from 'prop-types';
import ApplicationStore from '../stores/ApplicationStore';
import BaseComponent from '../bases/BaseComponent';

class Document extends BaseComponent {
  static propTypes = {
    context : PropTypes.object,
    html    : PropTypes.string,
    state   : PropTypes.string
  };

  static contextTypes = {
    getStore      : PropTypes.func,
    executeAction : PropTypes.func
  };

  static defaultProps = {
    context : {},
    html    : '',
    state   : ''
  };

  constructor(props) {
    super(props);
  }

  render() {
    const title = this.props.context.getStore(ApplicationStore).getState().pageTitle;
    const content = { __html : this.props.html };
    const script = { __html : this.props.state };

    return (
      <html lang>
        <head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <link rel="stylesheet" href="/css/lib.min.css" />
          <link rel="stylesheet" href="/css/app.min.css" />
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={content}></div>
          <script dangerouslySetInnerHTML={script}></script>
          <script src="/js/lib.js"></script>
          <script src="/js/app.js"></script>
        </body>
      </html>
    );
  }
}

export default Document;
