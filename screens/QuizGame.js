import { useEffect, useState,useContext } from "react"
import { FlatList, Text, View, StyleSheet} from "react-native"
import DataHook from "../hooks/DataHook"
import AppLoading from 'expo-app-loading';
import QuizList from "../components/quiz_ui/QuizList";
import Progression from "../components/quiz_ui/Progression";
import { Context } from "../context/QuestionNumberContext/numbercontext";



function QuizGame({route}){

    const [ data,category, loading, error ,  getQuizData] = DataHook()
    const [appIsReady, setAppIsReady] = useState(false)
    const {progressionChecked, progressionCheckedHandler, resetQuestionNumber} = useContext(Context)
    
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

     
    function update(){
        getQuizData()
    }

   
   
    if(loading){
        return <AppLoading 
            
        />
    }
  
    
    return (

        <View style = {styles.container}>
            
            <Progression 
                
                questionNumbers={data.length}
            />
            <QuizList 
                data = {data} 
                update={update}
                loading = {loading}
                
                
            />
        </View>
    )
}

export default QuizGame

const styles = StyleSheet.create({
    container : {
        flex : 1,   
    }
})