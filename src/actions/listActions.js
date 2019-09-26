export const ADD_ACTIVITY_SUCCESS = "ADD_ACTIVITY_SUCCESS";
export const ADD_ACTIVITY_ERROR = "ADD_ACTIVITY_ERROR";

export const LOAD_ACTIVITIES_SUCCESS = "LOAD_ACTIVITIES_SUCCESS";
export const LOAD_ACTIVITIES_ERROR = "LOAD_ACTIVITIES_ERROR";

export function loadActivities() {
  return function(dispatch) {
    fetch("/activities")
      .then(resp => resp.json())
      .then(activities => {
        dispatch({
          type: LOAD_ACTIVITIES_SUCCESS,
          activities
        });
      })
      .catch(error => {
        dispatch({
          type: LOAD_ACTIVITIES_ERROR,
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
