import { FlatList, StyleSheet, Text, View, Pressable } from "react-native"
import UniversalButton from "../UI/UniversalButton"

function QuizItem({answer}){

    function correctAnswer(){
        console.log('working')
    }

    console.log('working +'  +  answer)

    return(
        <UniversalButton
            onPress={correctAnswer}
        >
            {answer}
        </UniversalButton>
    )
}

export default QuizItem 

const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      borderRadius: 6,
      marginVertical: 12,
      backgroundColor: 'red',
      elevation: 2,
      shadowColor: 'black',
      shadowOpacity: 0.15,
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: 2,
    },
    pressed: {
      opacity: 0.9,
    },
    
    answerText: {
      fontWeight: 'bold',
      fontSize: 18,
      color: 'black',
    },
   
  });
  