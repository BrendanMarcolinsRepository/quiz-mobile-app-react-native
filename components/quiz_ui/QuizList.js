import { useEffect, useLayoutEffect, useState, useContext } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import AnswerList from "./AnswerList"
import QuizItem from "./QuizItem"
import QuizReview from "./QuizReview"
import { Context } from "../../context/QuestionNumberContext/numbercontext"



function QuizList({data}){


    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentAnswers, setCurrentAnswers] = useState([])
    const [gameState, setGameState] = useState(true)
    const [score, setScore] = useState(0)
    const [userAnswers, setUserAnswers] = useState([]) 
    const { toggleCheckHandler} = useContext(Context)


    function updateCurrentHandler(answer){
     
        console.log('correct ' + data[currentQuestion].correctAnswer)
        console.log('user  ' + answer) 

        toggleCheckHandler(currentQuestion)

        setUserAnswers(prev => [...prev, {
            correctAnswer : data[currentQuestion].correctAnswer,
            userAnswer : answer,
            question : data[currentQuestion].question
        }])


        if(answer.match(data[currentQuestion].correctAnswer)){
            setScore(prev => prev + 1)
        }

        if(currentQuestion + 1 >= data.length){
            setGameState(false)
        }else{
            setCurrentQuestion(prev => prev + 1)
        }
    }

    function gameStateFunction(){
        setCurrentQuestion(0)
        setCurrentAnswers([])
        setScore(0)
        setGameState(true)
        setUserAnswers([])
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

        return(
            <QuizReview  
                score = {score}
                userAnswers = {userAnswers}
                onPress = {gameStateFunction}
            />
        )
    }


    return (
        <View style = {styles.emptyContainer}>
            <View style = {styles.containerTextCategory}>
                <Text style = {styles.questionText}>{currentQuestion+1}.</Text>
                <Text style = {styles.questionText}>{data[currentQuestion].question}</Text>
            </View>
            
            <View style = {styles.textContainer}>
            
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
    },

    emptyContainer : {
        flexDirection : 'column',
        marginTop : 50,
        backgroundColor : 'blue',
        borderRadius : 10,
        height : 450, 
        marginTop : 110,
        alignItems : 'center',
        margin : 10, 
      
    },

    textContainer : {
        height : 300,
        width : 350,
        
    },

    containerTextCategory : {
        padding : 20,
        height : 120,
        width : 350,
        alignItems : 'flex-start',
        justifyContent : 'flex-start',
        
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
        paddingVertical : 3
    },

    

    
    
    
})