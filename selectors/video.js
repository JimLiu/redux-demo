import _ from 'lodash'
import { createSelector } from 'reselect';

const videosStateSelector = (state) => state.videos;
const usersStateSelector = (state) => state.users;
const routerStateSelector = (state) => state.router;


export const videoSelector = createSelector(
  videosStateSelector, usersStateSelector,
  routerStateSelector, (videosState, usersState, router) => {
    const id = router.params.id || 0;
    const video = videosState.get(parseInt(id));
    const user = video ? usersState.get(video.userId) : null;
    return {
      video,
      user
    }
  }
);