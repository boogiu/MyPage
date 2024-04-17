
let initialState={
    count : 0
}
function reducer(state = initialState,action){
    console.log(action)

    switch(action.type){
        case "USER_INFO":
            return {...state}

        default : 
            return {...state}
    }
}

export default reducer