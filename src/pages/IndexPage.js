import React from 'react';
import Debug from '../components/Debug';

export default class IndexPage extends React.Component {

  static contextTypes = {
    executeAction : React.PropTypes.func
  };

  render() {
    return (
      <div>
        <h2>Index</h2>
        <Debug />
      </div>
    );
  }
}
