import { useState } from "react"
import { FlatList, Text, View } from "react-native"
import DataHook from "../hooks/DataHook"
import AppLoading from 'expo-app-loading';
import QuizList from "../components/quiz_ui/QuizList";


function QuizGame(){

    const [ data,category, loading, error ,  getQuizData] = DataHook()
    
    const [gameState,setGameState] = useState(false)
    
    const [answer,setAnswer] = useState([])

    const [correct,setCorrect] = useState(0)

    if(loading){
        return <AppLoading 
            
        />
    }

    
    return (
        <View>
            
            <QuizList 
                data = {data} 
            />
            
           

        </View>
    )
}

export default QuizGame