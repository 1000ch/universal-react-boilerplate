import React from 'react';
import { NavLink } from 'fluxible-router';
import BaseComponent from '../bases/BaseComponent';

export default class Item extends BaseComponent {
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

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <NavLink href={`/items/${this.props.id}`}>
          {this.props.title}
        </NavLink>
      </li>
    );
  }
}
