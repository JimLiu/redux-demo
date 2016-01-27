import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as VideosActions from '../actions/videos';
import { videosSelector } from '../selectors/videos';
import { Link } from 'react-router'


class VideoList extends Component {


  componentDidMount() {
    const { videosActions } = this.props;
    videosActions.load();
  }


  render() {
  	const { status, videos } = this.props;
  	const videosMarkup = videos.map((video, i) => {
  		return (
  			<li key={i}>
  				<Link to={`/videos/${video.id}`}>
            {video.id}. {video.name}
          </Link>
  				
  			</li>
  		)
  	});
  	const loadingText = status.loading ? 'true' : 'false';
    return (
      <div>
	      <h1>VideoList</h1>
	      <h2>Loading: {loadingText}</h2>
	      <ul>
	      	{videosMarkup}
	      </ul>
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
  videosSelector,
  mapDispatchToProps
)(VideoList);


