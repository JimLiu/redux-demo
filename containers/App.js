import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as VideosActions from '../actions/videos';

import Header from '../components/Header'

class App extends Component {

  componentDidMount() {
    const { videosActions } = this.props;
    videosActions.load();
  }
  
  render() {

    return (
      <div>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    status: state.status.toJS()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    videosActions: bindActionCreators(VideosActions, dispatch),
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
