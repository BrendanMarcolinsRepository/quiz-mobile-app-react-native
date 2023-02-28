
import React, {useState, useEffect, createContext} from "react"

const Context = createContext()

function ContextProvider({children}){

    const [questionNumber,setQuestionNumber] = useState([])
    const [progressionChecked, setProgressionChecked] = useState(false)

    function progressionCheckedHandler(){
        setProgressionChecked(true)
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
        setProgressionChecked(false)

        console.log('progression ==== ' + progressionChecked)
        console.log('question number ==== ' + questionNumber)
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
