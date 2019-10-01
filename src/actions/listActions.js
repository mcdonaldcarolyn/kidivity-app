export const ADD_ACTIVITY_SUCCESS = "ADD_ACTIVITY_SUCCESS";
export const ADD_ACTIVITY_ERROR = "ADD_ACTIVITY_ERROR";

export const FETCH_ACTIVITIES_START = "FETCH_ACTIVITIES_START";
export const FETCH_ACTIVITIES_SUCCESS = "FETCH_ACTIVITIES_SUCCESS";
export const FETCH_ACTIVITIES_ERROR = "FETCH_ACTIVITIES_ERROR";
// export const addActivity = () => {
//   return dispatch => {
//     dispatch({ type: ADD_ACTIVITY_SUCCESS })
//     return (
//         fetch('/activities')
//         .then(resp => resp.json())
//         .then(activities => dispatch({
//             type: ADD_ACTIVITY_SUCCESS, payload: activities
//         }))

//       )
//   }
// }

export function loadActivities() {
  return function(dispatch) {
    dispatch({ type: FETCH_ACTIVITIES_START });
    fetch("/activities")
      .then(resp => resp.json())
      .then(activities => {
        dispatch({
          type: FETCH_ACTIVITIES_SUCCESS,
          activities
        });
        fetch("/categories")
          .then(resp => resp.json())
          .then(categories => {
            dispatch({
              type: FETCH_ACTIVITIES_SUCCESS,
              activities
            })
          })
      })
      .catch(error => {
        dispatch({
          type: FETCH_ACTIVITIES_ERROR,
          error
        });
      });
  };
}

export function addActivity(activity) {
  return function(dispatch) {
    // tempId++;
    // activity.id = tempId;
    // dispatch({
    //     type: ADD_ACTIVITY,
    //     activity
    const body = JSON.stringify({ activity });
    const headers = {
      "Content-Type": "application/json"
    };
    fetch("/activities", { method: "POST", body, headers })
      .then(resp => resp.json())
      .then(activity => {
        dispatch(addActivitySuccess(activity));
      })
    fetch("/categories", { method: "POST", body, headers })
      .then(resp => resp.json())
      .then(category => {
        dispatch(addActivitySuccess(category))
      })
      .catch(error => {
        dispatch(addActivityError(error));
      });
  };
}

export function addActivitySuccess(activity) {
  return {
    type: ADD_ACTIVITY_SUCCESS,
    activity
  };
}
export function addActivityError(error) {
  return {
    type: ADD_ACTIVITY_ERROR,
    error
  };
}
export function fetchActivitiesPending() {
  return {
    type: FETCH_ACTIVITIES_START
  };
}

export function fetchActivitiesSuccess(activities) {
  return {
    type: FETCH_ACTIVITIES_START,
    activities
  };
}
