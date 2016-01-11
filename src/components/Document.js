import React from 'react';
import ApplicationStore from '../stores/ApplicationStore';

class Document extends React.Component {

  static propTypes = {
    context: React.PropTypes.object,
    html: React.PropTypes.string,
    state: React.PropTypes.object
  };

  static contextTypes = {
    getStore: React.PropTypes.func,
    executeAction: React.PropTypes.func
  };

  static defaultProps = {
    context: {},
    html: '',
    state: {}
  };

  constructor(props) {
    super(props);
  }

  render() {
    const title = this.props.context.getStore(ApplicationStore).getState().pageTitle;
    const content = { __html: this.props.html };
    const script = { __html: this.props.state };

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

export default Document;
