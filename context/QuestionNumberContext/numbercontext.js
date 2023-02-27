
import React, {useState, useEffect, createContext} from "react"

const Context = createContext()

function ContextProvider({children}){

    const [questionNumber,setQuestionNumber] = useState([])
    const [progressionChecked, setProgressionChecked] = useState(false)

    function progressionCheckedHandler(toggle){
        console.log('toggle 1' + progressionChecked)
        console.log('toggle 1' + toggle)
        setProgressionChecked(toggle)
        console.log('toggle 2' + progressionChecked)
        console.log('toggle 2' + toggle)
    }

    function checkedHandler(questionNumbers){

        console.log("wokring" + questionNumbers)

        for(let i = 0; i < questionNumbers; i++){
            setQuestionNumber(prev => [...prev, {number : i, answered : false}])
        }
        
    }

    function toggleCheckHandler(id){
        console.log('toggle: ' + id)
        const newNumber = [...questionNumber]
        newNumber[id] = {number : id, answered : true}
        setQuestionNumber(newNumber)
    }

    
    function resetQuestionNumber(){
        setQuestionNumber([])
    }

    return (
        <Context.Provider value = {{
            progressionChecked,
            questionNumber,
            checkedHandler,
            progressionCheckedHandler,
            resetQuestionNumber,
            toggleCheckHandler
        }}>

            {children}
        </Context.Provider>
    )

}

export {ContextProvider,Context}
