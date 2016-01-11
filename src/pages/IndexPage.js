import React from 'react';
import Debug from '../components/Debug';

class IndexPage extends React.Component {

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
        <h2>Index</h2>
        <Debug />
      </div>
    );
  }
}

export default IndexPage;
