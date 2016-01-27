import _ from 'lodash'
import { createSelector } from 'reselect';

const videosStateSelector = (state) => state.videos;
const statusStateSelector = (state) => state.status;


export const videosSelector = createSelector(
  videosStateSelector, statusStateSelector,
  (videosState, statusState) => {
    return {
      videos: videosState,
      status: statusState.toJS()
    }
  }
);
