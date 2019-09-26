import { ADD_ACTIVITY_SUCCESS, FETCH_ACTIVITIES_SUCCESS } from "../actions/listActions";

export const initialState = {
  activities: []
};

export default function manageActivities(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_ACTIVITY_SUCCESS:
      return {
        ...state,
        activities: [...state.activities, action.activity]
      };
    case FETCH_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: action.activities
      };

    default:
      return state;
  }
}
