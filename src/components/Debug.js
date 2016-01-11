import React from 'react';
import { NavLink } from 'fluxible-router';

class Debug extends React.Component {

  static contextTypes = {
    getStore: React.PropTypes.func,
    executeAction: React.PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li>
          <NavLink href="/" activeClass="is-active">
            Index
          </NavLink>
        </li>
        <li>
          <NavLink href="/profile" activeClass="is-active">
            Profile
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Debug;
