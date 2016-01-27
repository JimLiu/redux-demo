import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as VideosActions from '../actions/videos';
import { videoSelector } from '../selectors/video';


class VideoDetail extends Component {
  render() {
  	const { video, user } = this.props;
    return (
      
      <div>
      	<h1>Video - {video.name}</h1>
      	<h2>made by {user.name}</h2>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    videosActions: bindActionCreators(VideosActions, dispatch),
    dispatch
  };
}

export default connect(
  videoSelector,
  mapDispatchToProps
)(VideoDetail);


