import { ADD_ACTIVITY_SUCCESS } from "../actions/listActions";

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
    
    default:
      return state;
  }
}
