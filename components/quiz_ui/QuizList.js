import { useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import AnswerList from "./AnswerList"



function QuizList({data}){

    console.log('in list '  + data[0].id)

    
    return (
        <View style = {styles.emptyContainer}>
            <Text>Category : {data[0].category}</Text>
            <FlatList 
                style = {styles.list}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem = {({item}) => (
                    <AnswerList 
                        quizAnswers = {item.answers}
                        quizQuestion = {item.question}
                    />
                    
                )}
            />
            
           

        </View>
    )
}

export default QuizList

const styles = StyleSheet.create({

    list : {
        margin : 24,

    },

    emptyContainer : {
        top : 100,
        backgroundColor : 'grey',
        justifyContent : 'center',
        alignContent : "center",
        height : 500, 
        width : 350,
        borderRadius : 10
    },

    emptyText : {
        color : 'white',
        fontSize : 18
    }

    
    
    
})