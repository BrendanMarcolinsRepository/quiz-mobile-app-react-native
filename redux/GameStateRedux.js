export function updateQuestionNumber(value){
    const num = value

    console.log("update q")

    return (dispatch) => {
        dispatch(() => {
            dispatch({
                type : "QUESTIONNUMBER",
                payload : num
            })
        })
    }
}

export function updateCategoryNumber(value){
    const num = value
    console.log("update c")
    return (dispatch) => {
        dispatch(() => {
            dispatch({
                type : "CATEGORYNUMBER",
                payload : num
            })
        })
    }
}

export function updateGameDifficulty(value){
    const difficulty = value
    console.log("update d")
    return (dispatch) => {
        dispatch(() => {
            dispatch({
                type : "DIFFICULTY",
                payload : difficulty
            })
        })
    }
}

export function updateTime(value){
    const time = value
    console.log("update d")
    return (dispatch) => {
        dispatch(() => {
            dispatch({
                type : "TIME",
                payload : time
            })
        })
    }
}

const initialState = {
    questionNumbers: 0,
    cateogoryNumbers: 0,
    difficulty : "easy", 
    time : 20
    
}

export default function gameSetupReducer(gameReducers = initialState, action){

    switch(action.type){
        case "QUESTIONNUMBER" :
            return {
                ...gameReducers,
                questionNumbers : action.payload
            }
        case "CATEGORYNUMBER" :
            return {
                ...gameReducers,
                cateogoryNumbers : action.payload
            }
        case "DIFFICULTY" :
            return {
                ...gameReducers,
                difficulty : action.payload
            }
        case "TIME" :
            return {
                ...gameReducers,
                time : action.payload
            }
        default :
            return gameReducers;
    }
}