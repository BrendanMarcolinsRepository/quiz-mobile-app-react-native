import { useEffect, useLayoutEffect, useState, useContext } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import AppLoading from 'expo-app-loading';
import QuizItem from "./QuizItem"
import QuizReview from "./QuizReview"
import { Context } from "../../context/QuestionNumberContext/numbercontext"
import Timer from "./Timer";



function QuizList({data, loading, setGameState, gameState,gameOver, setGameOver, category, updateData}){


    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentAnswers, setCurrentAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [answered, setAnswered] = useState(false) 
    const {toggleCheckHandler, resetQuestionNumber} = useContext(Context)
    const [update, setUpdate] = useState(false)
    
    
   


    function updateCurrentHandler(correct){
        toggleCheckHandler(currentQuestion)
        setAnswered(true)
      
        if(correct){
            setScore(prev => prev + 1)

            console.log('correct' + correct + "  score + " + score)
        }else{
            console.log('not correct -- ' + "  score + " + score)
        }
    }

    function gameStateFunction(){
        setCurrentQuestion(0)
        setCurrentAnswers([])
        setScore(0)
        setUpdate(false)
        resetQuestionNumber()
        setAnswered(false)
        setGameOver(false)
        setGameState(true)
        updateData()
    }

    



    useLayoutEffect(() => {
        
        const tempAnswers = []

        if(!answered || data){
            for(let i = 0; i < data[currentQuestion].answers.length ; i++){
                tempAnswers.push(data[currentQuestion].answers[i])
            }

            setCurrentAnswers(tempAnswers)
        }
        
    },[!answered, data])

   


    if(gameOver){
        return(
            <QuizReview  
                score = {score}
                onPress = {gameStateFunction}
                category = {category}
                
            />
        )
        
    }

    if(loading){
        return <AppLoading 
            
        />
    }


    /**  <Timer
                time = {data[currentQuestion].time}
                gameState = {gameState}
                setGameState = {setGameState}
                gameOver = {gameOver}
            /> */


    return (
        <View style = {styles.emptyContainer}>

            {
                answered && <Timer
                    time = {data[currentQuestion].time}
                    length = {data.length}
                    gameState = {gameState}
                    setGameState = {setGameState}
                    answered = {answered}
                    setAnswered = {setAnswered}
                    currentQuestion = {currentQuestion} 
                    setCurrentQuestion = {setCurrentQuestion}
                    gameOver = {gameOver}
                    setGameOver = {setGameOver}
                    setUpdate = {setUpdate}
                    update = {update}
                />
            }

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
                                correctAnswer = {data[currentQuestion].correctAnswer}
                                answered = {answered}
                                setUpdate = {setUpdate}
                                update = {update}
                                
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
        margin : 5,
        
    },

    emptyContainer : {
        flexDirection : 'column',
        marginTop : 50,
        borderRadius : 10,
        height : 450, 
        marginTop : 110,
        alignItems : 'center',
        margin : 10, 
      
    },

    textContainer : {
        height : 350,
        width : 350,
        marginTop : 20,
        
    },

    containerTextCategory : {
        padding : 20,
        height : 120,
        width : 350,
        alignItems : 'flex-start',
        justifyContent : 'flex-start',
        overflow : 'scroll'
        
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
        color : 'black',
        fontSize : 18,
        alignItems : 'center',
        justifyContent : 'center',
        paddingVertical : 3
    },

    

    
    
    
})