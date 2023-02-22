import { useEffect, useLayoutEffect, useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import UniversalButton from "../UI/UniversalButton"
import AnswerList from "./AnswerList"
import QuizItem from "./QuizItem"



function QuizList({data}){


    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentAnswers, setCurrentAnswers] = useState([])
    const [gameState, setGameState] = useState(true)
    const [score, setScore] = useState(0)
    const [userAnswers, setUserAnswers] = useState([]) 


    function updateCurrentHandler(answer){
     
        console.log('correct ' + data[currentQuestion].correctAnswer)
        console.log('user  ' + answer) 

        setUserAnswers(prev => [...prev, {
            correctAnswer : data[currentQuestion].correctAnswer, userAnswer : answer}])


        if(answer.match(data[currentQuestion].correctAnswer)){
            setScore(prev => prev + 1)
        }

        if(currentQuestion + 1 >= data.length){
            setGameState(false)
        }else{
            setCurrentQuestion(prev => prev + 1)
        }
    }

  


    useLayoutEffect(() => {
        
        const tempAnswers = []

        if(setGameState){
            for(let i = 0; i < data[currentQuestion].answers.length ; i++){
                tempAnswers.push(data[currentQuestion].answers[i])
            }
        }
        setCurrentAnswers(tempAnswers)
    },[currentQuestion])

    if(!gameState){

        function gameStateFunction(){
            setGameState(!prev)
        }

        return(
            <View>
                <Text>finished, Score is : {score}</Text>

                <FlatList 
                    style = {styles.list}
                    data={userAnswers}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item}) => (
                    

                        <View>
                            <Text>Correct Answer : {item.correctAnswer}</Text>
                            <Text>Your Answer : {item.userAnswer}</Text>
                            <UniversalButton
                                onPress={gameStateFunction}
                            >
                                Play Again
                            </UniversalButton>
                        
                        </View>



                        
                    )}
                />
            </View>
        )
    }


    return (
        <View style = {styles.emptyContainer}>
            <Text style = {styles.categoryText}>Category: {data[currentQuestion].category}</Text>
            <View style = {styles.textContainer}>
                
                <Text style = {styles.questionText}>Question: {data[currentQuestion].question}</Text>
            
                <FlatList 
                    style = {styles.list}
                    data={currentAnswers}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item}) => (
                    

                        <View>
                            <QuizItem
                                answer = {item}
                                handler = {updateCurrentHandler}
                            />
                        </View>

                        
                    )}
                />

            </View>
        </View>
    )
}

export default QuizList

const styles = StyleSheet.create({

    list : {
        margin : 20,
        top : 0,
        

    },

    emptyContainer : {
        backgroundColor : 'grey',
        flex  : 1,
        flexDirection : 'column'
      
    },

    textContainer : {
        backgroundColor : 'blue',
        padding : 10,
        marginVertical : 100,
        
        
      
    },

    emptyText : {
        color : 'white',
        fontSize : 18
    },

    categoryContainer : {
        alignItems : 'center',
        justifyContent : 'center',
       
        
    },

    categoryText : {
        color : 'white',
        fontSize : 18,
        alignItems : 'center',
    },

    questionContainer : {
        alignItems : 'center',
        justifyContent : 'center',
       
        
    },

    questionText : {
        color : 'white',
        fontSize : 18,
        alignItems : 'center',
        justifyContent : 'center',
    }

    
    
    
})