import React from 'react';
import PropTypes from 'prop-types';
import { connectToStores } from 'fluxible-addons-react';
import BaseComponent from '../bases/BaseComponent';
import ItemList from '../components/ItemList';
import ItemStore from '../stores/ItemStore';

class IndexPage extends BaseComponent {
  static contextTypes = {
    getStore      : PropTypes.func,
    executeAction : PropTypes.func
  };

  static propTypes = {
    categories : PropTypes.arrayOf(PropTypes.object),
    items      : PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    categories : [],
    items      : []
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="Container">
        <ItemList items={this.props.items} />
      </div>
    );
  }
}

IndexPage = connectToStores(IndexPage, [ItemStore], context => {
  return {
    items : context.getStore(ItemStore).getItems()
  };
});

export default IndexPage;
