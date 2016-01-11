import debug from 'debug';
import React from 'react';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import { handleHistory } from 'fluxible-router';
import ApplicationStore from '../stores/ApplicationStore';

class Application extends React.Component {

  static propTypes = {
    currentRoute: React.PropTypes.shape({
      handler: React.PropTypes.func
    })
  };

  static contextTypes = {
    getStore: React.PropTypes.func,
    executeAction: React.PropTypes.func
  };

  static defaultProps = {
    currentRoute: {
      handler: () => {}
    }
  };

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    debug(prevState);

    const newProps = this.props;

    if (newProps.ApplicationStore.pageTitle === prevProps.ApplicationStore.pageTitle) {
      return;
    }

    document.title = newProps.ApplicationStore.pageTitle;
  }

  render() {
    const Handler = this.props.currentRoute.handler;

    return (
      <div>
        <Handler />
      </div>
    );
  }
}

// connect to store
Application = connectToStores(Application, [ApplicationStore], (context, props) => {
  debug(props);

  return {
    ApplicationStore: context.getStore(ApplicationStore).getState()
  };
});

// history handler
Application = handleHistory(Application);

// context provider
Application = provideContext(Application);

export default Application;
