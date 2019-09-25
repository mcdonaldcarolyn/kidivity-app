// const INITIAL_DATA = [
//     {
//         name: "pink slide park",
//         addres: "melrose and warren",
//         description: "great slides and swings- shade"
//     }
// ]


export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const ADD_ACTIVITY_SUCCESS = "ADD_ACTIVITY_SUCCESS";
export const ADD_ACTIVITY_ERROR = "ADD_ACTIVITT_ERROR";
export function addActivity(activity){
    return function  (dispatch) {
        // tempId++;
        // activity.id = tempId;
        // dispatch({
        //     type: ADD_ACTIVITY, 
        //     activity
        fetch('http://localhost:3001/activities', {method: 'POST', body:activity})
            .then(resp => resp.json())
            .then(resp => {
                if(resp.error){
                    throw new Error(resp.error);
                }
            dispatch(addActivitySuccess(resp.activity));
                return resp.activity;
            })
                .catch(error => dispatch(addActivityError(error)))
        dispatch(addActivitySuccess)
        };
    };

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
//         ){
//         dispatch(fetchactivitiesPending());
//     }  
// };

// let tempId = 0;

// export function addActivity(activity){
//     return function(dispatch){
//         dispatch(addActivityPending());
//         tempId++;
//         activity.id = tempId;
//         dispatch(addActivitySuccess(activity));
//     };
// }