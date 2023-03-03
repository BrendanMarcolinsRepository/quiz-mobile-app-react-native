import { useEffect, useState,useContext } from "react"
import { FlatList, Text, View, StyleSheet, ActivityIndicator} from "react-native"
import DataHook from "../hooks/DataHook"
import AppLoading from 'expo-app-loading';
import QuizList from "../components/quiz_ui/QuizList";
import Progression from "../components/quiz_ui/Progression";
import { Context } from "../context/QuestionNumberContext/numbercontext";
import Loading from "../components/UI/Loading";



function QuizGame({route}){

    const [ data,category, loading, error ,  getQuizData] = DataHook()
    const [appIsReady, setAppIsReady] = useState(false)
    const {progressionChecked, progressionCheckedHandler, resetQuestionNumber} = useContext(Context)
    const [gameState, setGameState] = useState(true)
    const [gameOver, setGameOver] = useState(false)
   
    
    
    /*
    FUTURE WORK
    useEffect(() => {
        async function prepareApplication(){
            try{

                await loading

            }catch(exception){
                console.log(exception)
            }finally{
                setAppIsReady(true)
            }
        }
    })
    */



     
    function updateData(){
        getQuizData()
    }


   
    if(loading){return(<Loading />) }
    
    return (

        <View style = {styles.container}>
            
            
            <QuizList 
                data = {data} 
                loading = {loading}
                setGameState = {setGameState}
                gameState = {gameState}
                gameOver = {gameOver}
                setGameOver = {setGameOver}
                category = {category}
                updateData = {updateData}
            />
        </View>
    )
}

export default QuizGame

const styles = StyleSheet.create({
    container : {
        flex : 1,   
    },

    loaderContainer : {
        flex : 1,
        justifyContent : 'center',
        alignContent : 'center'
    }
})