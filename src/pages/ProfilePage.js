import React from 'react';
import Debug from '../components/Debug';

export default class ProfilePage extends React.Component {

  static contextTypes = {
    executeAction : React.PropTypes.func
  };

  render() {
    return (
      <div>
        <h2>Profile</h2>
        <p>😳</p>
        <Debug />
      </div>
    );
  }
}
