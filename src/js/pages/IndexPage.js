import React from 'react';
import { NavLink } from 'fluxible-router';
import { connectToStores } from 'fluxible-addons-react';
import BaseComponent from '../bases/BaseComponent';
import ItemList from '../components/ItemList';
import ItemStore from '../stores/ItemStore';

class IndexPage extends BaseComponent {
  static contextTypes = {
    getStore      : React.PropTypes.func,
    executeAction : React.PropTypes.func
  };

  static propTypes = {
    categories : React.PropTypes.arrayOf(React.PropTypes.object),
    items      : React.PropTypes.arrayOf(React.PropTypes.object)
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

IndexPage = connectToStores(IndexPage, [ItemStore], (context, props) => {
  return {
    items : context.getStore(ItemStore).getItems()
  };
});

export default IndexPage;
