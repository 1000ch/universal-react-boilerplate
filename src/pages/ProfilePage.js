import React from 'react';
import Debug from '../components/Debug';

class ProfilePage extends React.Component {

  static contextTypes = {
    getStore: React.PropTypes.func,
    executeAction: React.PropTypes.func
  };

  constructor(props) {
    super(props);
  }

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

export default ProfilePage;
