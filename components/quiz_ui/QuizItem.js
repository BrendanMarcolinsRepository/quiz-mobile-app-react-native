import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import UniversalButton from "../UI/UniversalButton"

function QuizItem({answer, handler}){
    
    return(
        <UniversalButton
            onPress={handler}
            customStyle = {styles.button}
        >
            {answer}
        </UniversalButton>
    )
}

export default QuizItem 



const styles = StyleSheet.create({
   
    button : {
        paddingHorizontal : 15,
        paddingVertical : 15,
        margin : 4,
        backgroundColor : '#d6cce4',
        alignItems : 'flex-start',
    
        
        //android stuff
        elevation : 2,
    
        //ios stuff
        shadowColor : 'black',
        shadowOpacity : '0.15',
        shadowOffset : {width : 1, height : 1},
        shadowRadius : 5,
        borderRadius : 10
    },
   
})



  