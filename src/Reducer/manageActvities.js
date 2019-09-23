import {ADD_ACTIVITY} from '../actions/listActions';
export const initialState = {
    activites: []
};

export default function manageActivities(state= initialState, action){
    {
        console.log(action);
        switch(action.type){
            case ADD_ACTIVITY:
            return [...state, action.activity];
        }
     
        return state;
    }
}
