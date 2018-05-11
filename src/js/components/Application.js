import React from 'react';
import PropTypes from 'prop-types';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import { handleHistory } from 'fluxible-router';
import BaseComponent from '../bases/BaseComponent';
import ApplicationStore from '../stores/ApplicationStore';

class Application extends BaseComponent {
  static contextTypes = {
    getStore      : PropTypes.func,
    executeAction : PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.pageTitle === prevProps.pageTitle) {
      return;
    }

    document.title = this.props.pageTitle;
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

const storeConnectedApplication = connectToStores(
  Application,
  [ApplicationStore],
  context => context.getStore(ApplicationStore).getState()
);

const historyHandledApplication = handleHistory(storeConnectedApplication);
const contextProvidedApplication = provideContext(historyHandledApplication);

export default contextProvidedApplication;
