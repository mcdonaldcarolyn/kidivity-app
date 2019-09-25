// const INITIAL_DATA = [
//     {
//         name: "pink slide park",
//         addres: "melrose and warren",
//         description: "great slides and swings- shade"
//     }
// ]

let tempId = 0;
export const ADD_ACTIVITY = "ADD_ACTIVITY"
export function addActivity(activity){
    return function  (dispatch) {
        // tempId++;
        // activity.id = tempId;
        // dispatch({
        //     type: ADD_ACTIVITY, 
        //     activity
        fetch('localhost:3001', {method: 'POST', body:activity})
            .then(resp => resp.json())
            .then(resp => {
                if(resp.error){
                    throw new Error(resp.error);
                }
            dispatch(addActivitySuccess(resp.activity));
                return resp.activity;
            })
                .catch(error => dispatch(addActivityError(error)))
        dispatch(addActivitySucces)
        });
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