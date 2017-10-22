import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import AppNavBar from './navigation/nav-bar';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <AppNavBar />
        <h1>Hello from {this.props.phrase}!</h1>
      </div>
    );
  }
}

export default Index;

Index.propTypes = {
  phrase: PropTypes.string,
};

Index.defaultProps = {
  phrase: '',
};

