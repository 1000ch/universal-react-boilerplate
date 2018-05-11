import React from 'react';
import PropTypes from 'prop-types';
import { connectToStores } from 'fluxible-addons-react';
import BaseComponent from '../bases/BaseComponent';
import ItemStore from '../stores/ItemStore';

class ItemPage extends BaseComponent {
  static contextTypes = {
    getStore      : PropTypes.func,
    executeAction : PropTypes.func
  };

  static propTypes = {
    created_at : PropTypes.string,
    id         : PropTypes.string,
    tags       : PropTypes.arrayOf(PropTypes.object),
    title      : PropTypes.string,
    updated_at : PropTypes.string,
    url        : PropTypes.string,
    user       : PropTypes.object
  };

  static defaultProps = {
    created_at : '',
    id         : '',
    tags       : [],
    title      : '',
    updated_at : '',
    url        : '',
    user       : {}
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="Container">
        <dl>
          <dt>id</dt>
          <dd>{this.props.id}</dd>
        </dl>
        <dl>
          <dt>title</dt>
          <dd>{this.props.title}</dd>
        </dl>
        <dl>
          <dt>url</dt>
          <dd>{this.props.url}</dd>
        </dl>
        <dl>
          <dt>created_at</dt>
          <dd>{this.props.created_at}</dd>
        </dl>
        <dl>
          <dt>updated_at</dt>
          <dd>{this.props.updated_at}</dd>
        </dl>
      </div>
    );
  }
}

ItemPage = connectToStores(ItemPage, [ItemStore], context => {
  return context.getStore(ItemStore).getItem();
});

export default ItemPage;
