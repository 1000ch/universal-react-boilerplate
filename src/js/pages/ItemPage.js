import React from 'react';
import { connectToStores } from 'fluxible-addons-react';
import BaseComponent from '../bases/BaseComponent';
import ItemStore from '../stores/ItemStore';

class ItemPage extends BaseComponent {
  static contextTypes = {
    getStore      : React.PropTypes.func,
    executeAction : React.PropTypes.func
  };

  static propTypes = {
    created_at : React.PropTypes.string,
    id         : React.PropTypes.string,
    tags       : React.PropTypes.arrayOf(React.PropTypes.object),
    title      : React.PropTypes.string,
    updated_at : React.PropTypes.string,
    url        : React.PropTypes.string,
    user       : React.PropTypes.object
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
