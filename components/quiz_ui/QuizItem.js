import { useState } from "react"
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import UniversalButton from "../UI/UniversalButton"

function QuizItem({answer, handler, correctAnswer, answered, setUpdate, update}){

    const [isPress, setIsPress] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)

    console.log('is pressed : ' + isPress)

    let buttonStyle = 
        !isPress ? styles.button : (isCorrect ? styles.pressedCorrect : styles.pressedIncorrect)

    
    if(answered && answer.match(correctAnswer)){buttonStyle = styles.pressedCorrect}
    

    function checker() {
        setIsPress(true)
        setUpdate(true)
        if(answer.match(correctAnswer)){
            setIsCorrect(true)
            handler(true)
        }else{
            handler(false) 
        }
        
    }

    if(!update && isPress){
        setIsPress(false)
    }

    
    return(
        <UniversalButton
            onPress={checker}
            customStyle = {buttonStyle}
            answered = {answered}
               
        >
            {answer}
        </UniversalButton>
    )
}

export default QuizItem 



let styles = StyleSheet.create({
   
    button : {
        paddingHorizontal : 15,
        paddingVertical : 20,
        margin : 10,
        backgroundColor : 'white',
        borderBottomColor : 'black',
        alignItems : 'flex-start',
        borderWidth: 1, 
        
    
        
        //android stuff
        elevation : 2,
    
        //ios stuff
        shadowColor : 'black',
        shadowOpacity : '0.15',
        shadowOffset : {width : 1, height : 1},
        shadowRadius : 5,
        borderRadius : 10
    },

    pressedCorrect : {
        paddingHorizontal : 15,
        paddingVertical : 20,
        margin : 10,
        backgroundColor : 'green',
        borderBottomColor : 'black',
        alignItems : 'flex-start',
        borderWidth: 1, 
        
    
        
        //android stuff
        elevation : 2,
    
        //ios stuff
        shadowColor : 'black',
        shadowOpacity : '0.15',
        shadowOffset : {width : 1, height : 1},
        shadowRadius : 5,
        borderRadius : 10
    },

    pressedIncorrect : {
        paddingHorizontal : 15,
        paddingVertical : 20,
        margin : 10,
        backgroundColor : 'red',
        alignItems : 'flex-start',
        borderWidth: 1, 
        
    
        
        //android stuff
        elevation : 2,
    
        //ios stuff
        shadowColor : 'black',
        shadowOpacity : '0.15',
        shadowOffset : {width : 1, height : 1},
        shadowRadius : 5,
        borderRadius : 10
    }
   
})



  