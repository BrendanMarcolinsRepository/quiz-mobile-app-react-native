import { useState } from "react"
import { FlatList, Text, View, StyleSheet} from "react-native"
import DataHook from "../hooks/DataHook"
import AppLoading from 'expo-app-loading';
import QuizList from "../components/quiz_ui/QuizList";


function QuizGame(){

    const [ data,category, loading, error ,  getQuizData] = DataHook()
    
   
    if(loading){
        return <AppLoading 
            
        />
    }

    
    return (
        <View style = {styles.container}>
            
            <QuizList 
                data = {data} 
            />
            
           

        </View>
    )
}

export default QuizGame

const styles = StyleSheet.create({
   
    container : {
        flex : 1,
        alignItems : 'center' ,
       
        
    }
   
   
})