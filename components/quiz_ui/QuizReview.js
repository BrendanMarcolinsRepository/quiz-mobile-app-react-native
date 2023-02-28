import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import UniversalButton from "../UI/UniversalButton"
import { Context } from "../../context/QuestionNumberContext/numbercontext"
import { useContext } from "react"

function QuizReview({score, userAnswers,question, onPress}){

    

    function playagain(){
        
        onPress()
    }

    return(
        <View style = {styles.container}>
                <View style = {styles.scoreTextOutterContainer}> 
                    <View style = {styles.scoreTextMiddleContainer}>    
                        <View style = {styles.scoreTextInnerContainer}>
                            <Text style = {styles.scoreText}>{score}</Text>
                        </View>
                    </View>
                </View>
                
                <ScrollView  style = {styles.containerList}>
                    <FlatList 
                        nestedScrollEnabled = {true}
                        style = {styles.list}
                        data={userAnswers}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem = {({item}) => (
                                <View style = {styles.resultsContainer}>
                                    <Text style = {styles.textQuestionCard}>Question : {item.question}</Text>
                                    <View  style = {styles.answersContainer}>
                                        <Text style = {styles.textCard}>Correct Answer : {item.correctAnswer}</Text>
                                        <Text style = {styles.textCard}>Your Answer : {item.userAnswer}</Text>
                                    </View>
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
        marginTop: 80,
        marginHorizontal : 20,
        
        
    },
   
    resultsContainer : {
        height : 250,
        width : 350,
        borderRadius : 10,
        
        backgroundColor : 'blue',
        padding : 20,
        marginVertical : 10
        

    },

    answersContainer : {
        height : 150,
        width : 250,
        borderRadius : 10,
        justifyContent :'center',
        alignItems : 'center',
        alignContent : "center",
        backgroundColor : 'red',
        marginVertical : 10,
        marginHorizontal : 30
        

    },

    scoreTextOutterContainer : {
        marginHorizontal : 120,
        top : 50,
        justifyContent : "center",
        alignContent : 'center',
        borderRadius : 1000,
        width : 150,
        height : 150,
        backgroundColor : '#d6cce4',
        elevation : 5
        
        

    },

    scoreTextMiddleContainer : {
        marginHorizontal : 12,
        justifyContent : "center",
        alignContent : 'center',
        borderRadius : 1000,
        width : 125,
        height : 125,
        backgroundColor : 'lightblue',
        
        

    },

    scoreTextInnerContainer : {
        marginHorizontal : 12,
        alignItems : 'center',
        borderRadius : 1000,
        width : 100,
        height : 100,
        backgroundColor : '#d6cce4',
        justifyContent : "center",
        
        
        

    },

    scoreText : {
       
        fontSize : 20
        

    },

    textQuestionCard : {
        
        color : 'white'
    },
    
    textCard : {
        textAlign : 'left',
        color : 'white',
        
    },

    buttonContainer : {
        marginHorizontal : 125,
        top : 30
    },
   
    button : {
        width : 150,
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

