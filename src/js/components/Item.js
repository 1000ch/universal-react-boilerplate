import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'fluxible-router';
import BaseComponent from '../bases/BaseComponent';

export default class Item extends BaseComponent {
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
