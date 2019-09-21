const INITIAL_DATA = [
    {
        name: "pink slide park",
        addres: "melrose and warren",
        description: "great slides and swings- shade"

    }
]

export function fetchActivities(){
    return function(dispatch){
        dispatch(fetchActivitesPending());
    }  
};

let tempId = 0;

export function addActivity(activity){
    return function(dispatch){
        dispatch(addActivityPending());
        tempId++;
        activity.id = tempId;
        dispatch(addActivitySuccess(activity));
    };
}