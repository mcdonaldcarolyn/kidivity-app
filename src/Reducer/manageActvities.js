import { ADD_ACTIVITY_SUCCESS, FETCH_ACTIVITIES_SUCCESS } from "../actions/listActions";
import { ADD_CATEGORY_SUCCESS, FETCH_CATEGORIES_SUCCESS } from '../actions/categoryActions';
export const initialState = {
  activities: []
  // categories: []
};

export default function manageActivities(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_ACTIVITY_SUCCESS:
      return {
        ...state,
        activities: [...state.activities, action.activity, action.activity]
      };
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, action.category, action.ADD_CATEGORY_SUCCESS]
      };
    case FETCH_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: action.activities
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories
      }
    default:
      return state;
  }
}
