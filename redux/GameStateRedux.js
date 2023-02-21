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

const initialState = {
    questionNumbers: 0,
    cateogoryNumbers: 0,
    difficulty : "easy"
    
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
        default :
            return gameReducers;
    }
}