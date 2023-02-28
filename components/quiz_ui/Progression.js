import { useContext, useEffect } from "react"
import { FlatList, Text, View, StyleSheet, ScrollView} from "react-native"
import CircleProgression from "../UI/CircleProgression"
import { useState } from "react"
import { Context } from "../../context/QuestionNumberContext/numbercontext"
import { Ionicons } from '@expo/vector-icons';

function Progression({questionNumbers}){

    
    const {progressionChecked, questionNumber, checkedHandler, progressionCheckedHandler} = useContext(Context)
 
    useEffect(() => {
        if(!progressionChecked){
            checkedHandler(questionNumbers)
            progressionCheckedHandler()
        }
        
    }, [progressionChecked])

    return(
        <View style = {styles.container}>
            <FlatList 
                //style = {styles.list}
                contentContainerStyle = {styles.listcontainer}
                data={questionNumber}
                keyExtractor={(item, index) => index.toString()}
                renderItem = {({item}) => (
                    <View>
                        <CircleProgression>
                            {
                                questionNumber[item.number].answered ? 
                                <Ionicons 
                                        name = {"checkmark-outline"}
                                        size = {25}
                                  
                                />
                                : item.number + 1 
                            }
                            
                        </CircleProgression>  
                    </View>
                                
                )}
            />
            
        </View>
    )

}

export default Progression

const styles = StyleSheet.create({
   
    container : {
       
        top : 90
    },
    
    listcontainer : {
        flexDirection : 'row',
        justifyContent: 'space-evenly',
        
    },

        
})