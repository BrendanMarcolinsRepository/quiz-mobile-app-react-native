import { FlatList, StyleSheet, Text, View } from "react-native"
import QuizItem from "./QuizItem";
function AnswerList({quizAnswers,quizQuestion }){

    console.log('in here doing sometng mankasf as;fkpdsF')

    return(
        <View style = {styles.item}>
             <Text >Question : {quizQuestion}</Text>
            <FlatList 
                style = {styles.list}
                data={quizAnswers}
                keyExtractor={(item, index) => index.toString()}
                renderItem = {({item}) => (
                    <QuizItem 
                        answer = {item}
                    />
                    
                )}
            />
            
        </View>
        
    )

}

export default AnswerList

const styles = StyleSheet.create({
    item: {
      alignItems: 'center',
      borderRadius: 6,
      marginVertical: 12,
      backgroundColor: 'red',
      elevation: 2,
      shadowColor: 'black',
      shadowOpacity: 0.15,
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: 2,
      width : '100%',
      height : '100%'
    },
    pressed: {
      opacity: 0.9,
    },
    
    title: {
      fontWeight: 'bold',
      fontSize: 18,
      color: 'black',
    },
   
  });
  