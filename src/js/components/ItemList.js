import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../bases/BaseComponent';
import Item from './Item';

export default class ItemList extends BaseComponent {
  static propTypes = {
    items : PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    items : []
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => {
          return <Item key={index} {...item}></Item>;
        })}
      </ul>
    );
  }
}
