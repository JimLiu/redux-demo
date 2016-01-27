import _ from 'lodash';
import request from 'superagent';
import * as ActionTypes from '../ActionTypes';


export function load() {

  return (dispatch, getState) => {

    var url = '/api',
        qs = {};
    dispatch({
      	type: ActionTypes.VIDEOS_LOADING
    });

    request
      .get(url)
      .end(function(err, res) {
        if (err) {
          dispatch({
            type: ActionTypes.VIDEOS_LOAD_FAILURE,
            errors: {
              msg: 'Failed to load api',
              stack: ex
            }
          });
        } else {
          dispatch({
            type: ActionTypes.VIDEOS_LOAD_SUCCESS,
            users: res.body.users,
            videos: res.body.videos
          });
      }});


  };
}