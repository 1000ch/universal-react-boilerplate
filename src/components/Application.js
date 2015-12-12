import React from 'react';
import ApplicationStore from '../stores/ApplicationStore';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import { handleHistory } from 'fluxible-router';
import pages from '../configs/routes';

class Application extends React.Component {
  render() {
    const Handler = this.props.currentRoute.handler;

    return (
      <div>
        <Handler />
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const newProps = this.props;
    if (newProps.pageTitle === prevProps.pageTitle) {
      return;
    }
    document.title = newProps.pageTitle;
  }
}

export default provideContext(handleHistory(connectToStores(
  Application,
  [ApplicationStore],
  function (context, props) {
    const appStore = context.getStore(ApplicationStore);
    return {
      pageTitle: appStore.getPageTitle()
    };
  }
)));
