import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import UniversalButton from "../UI/UniversalButton"
import { Context } from "../../context/QuestionNumberContext/numbercontext"
import { useContext } from "react"

function QuizReview({score, userAnswers,question, onPress}){

    const {progressionChecked, progressionCheckedHandler, resetQuestionNumber} = useContext(Context)


    function playagain(){
        resetQuestionNumber()
        progressionCheckedHandler(false)
        onPress()
    }

    return(
        <View style = {styles.container}>
                <View style = {styles.scoreTextContainer}>
                    <Text>Score: {score}</Text>
                </View>
                
                <ScrollView  style = {styles.containerList}>
                    <FlatList 
                        nestedScrollEnabled = {true}
                        style = {styles.list}
                        data={userAnswers}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem = {({item}) => (
                                <View style = {styles.resultsContainer}>
                                    <Text style = {styles.textCard}>Question : {item.question}</Text>
                                    <Text style = {styles.textCard}>Correct Answer : {item.correctAnswer}</Text>
                                    <Text style = {styles.textCard}>Your Answer : {item.userAnswer}</Text>
                                </View>
                        )}
                    />
                </ScrollView>
                    <View style = {styles.buttonContainer}>
                        <UniversalButton 
                            onPress={playagain}
                            customStyle = {styles.button}
                        >
                            Play Again
                        </UniversalButton>
                    </View>
            </View>
    )
    
}

export default QuizReview


const styles = StyleSheet.create({
   
    container : {
        
        height : 610
        
        
    },

    containerList: {
        marginTop: 70
        
        
    },
   
    resultsContainer : {
        height : 200,
        width : 350,
        borderRadius : 10,
        justifyContent :'center',
        alignItems : 'center',
        alignContent : "center",
        backgroundColor : 'blue',
        padding : 20,
        marginVertical : 10
        

    },

    scoreTextContainer : {
        padding : 20,
        top : 50
        

    },
    
    textCard : {
        textAlign : 'left',
        color : 'white'
    },

    buttonContainer : {
        marginHorizontal : 25,
        top : 30
    },
   
    button : {
        width : 300,
        paddingVertical : 15,
        backgroundColor : '#d6cce4',
        alignItems : 'center',
    
        
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

