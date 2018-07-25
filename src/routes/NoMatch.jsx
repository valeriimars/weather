import React from 'react';
import {withRouter} from 'react-router';

class NoMatch extends React.Component {
  render() {
    return (
      <div style={{padding: '50px;', width: '900px', margin: '0 auto', fontSize:'2em'}}>
        <p>Invalid URL: {window.location.origin}<strong>{this.props.location.pathname}</strong></p>
      </div>
    );
  }
}

export default withRouter(NoMatch);
