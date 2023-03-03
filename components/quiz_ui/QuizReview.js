import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import UniversalButton from "../UI/UniversalButton"
import { Context } from "../../context/QuestionNumberContext/numbercontext"
import { useContext, useEffect } from "react"
import { Ionicons } from '@expo/vector-icons';

function QuizReview({score, onPress, category}){
    
    useEffect(() => {

        if(category.match('hard')){
            score = score * 200
        }
    
        if(category.match('medium')){
            score = score * 200
        }
        if(category.match('easy')){
            score = score * 200
        }
        
    }, [])

    
    

    function playagain(){
        
        onPress()
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.containerTop}>
                <View style = {styles.iconContainer}>
                    <Ionicons 
                            name = {'ribbon'}
                            size = {60}
                            color = {'gold'}
                        />
                        

                </View>
            
                <View style = {styles.scoreTextContainer}> 
                    <Ionicons 
                        name = {'star'}
                        size = {20}
                        color = {'gold'}
                        style = {styles.starIcon}
                    />
                    <Text style = {styles.scoreText}>{score}</Text>
                </View>
            </View>
                <View style = {styles.buttonContainer}>
                        <UniversalButton 
                            onPress={playagain}
                            customStyle = {styles.button}
                        >
                            View Leaderboards
                        </UniversalButton>
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

    containerTop: {
        backgroundColor : '#d6cce4',

        justifyContent :'center',
        alignItems : 'center',
        
        borderBottomLeftRadius : 50,
        borderBottomRightRadius : 50,
        
    },
   
    resultsContainer : {
        height : 250,
        width : 350,
        borderRadius : 10,
        backgroundColor : 'blue',
        padding : 20,
        marginVertical : 10
        

    },

    iconContainer : {
        width: 150,
        height: 150,
        borderTopLeftRadius : 200,
        borderTopRightRadius : 1000,
        borderBottomLeftRadius : 100,
        borderBottomRightRadius : 100,
        paddingRight : 10,
        paddingTop : 10, 
        flexDirection : 'row',
        justifyContent :'center',
        alignItems : 'center',
        alignContent : 'space-between',
        backgroundColor : 'white',
        top : 100,
        marginHorizontal : 130, 
        elevation : 8
        

    },

    scoreTextContainer : {
        marginHorizontal : 100,
        marginTop : 150,
        marginBottom  : 50,
        justifyContent : "center",
        alignItems : 'center',
        alignContent : 'space-between',
        flexDirection : 'row',
        borderRadius : 10,
        width : '50%',
        height : '10%',
        backgroundColor : 'white',
        elevation : 5
        
        

    },

   

    scoreText : {
        fontSize : 20,
        paddingLeft : 10,
    },

    textQuestionCard : {
        color : 'white'
    },
    
    textCard : {
        textAlign : 'left',
        color : 'white',
        
    },

    buttonContainer : {
        marginHorizontal : 80,
        marginVertical : 60,
        borderTopLeftRadius : 100,
        borderTopRightRadius : 100,
        
    },
   
    button : {
        width : 250,
        paddingVertical : 15,
        marginVertical : 20,
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

    starIcon : {
        paddingRight:5
    }
})

