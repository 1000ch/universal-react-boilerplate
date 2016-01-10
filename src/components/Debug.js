import React from 'react';
import provideContext from 'fluxible-addons-react/provideContext';
import { NavLink, handleHistory } from 'fluxible-router';

class Debug extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink href="/" activeClass="is-active">Index</NavLink>
        </li>
        <li>
          <NavLink href="/profile" activeClass="is-active">Profile</NavLink>
        </li>
      </ul>
    );
  }
}

// history handler
Debug = handleHistory(Debug);

// context provider
Debug = provideContext(Debug);

export default Debug;
