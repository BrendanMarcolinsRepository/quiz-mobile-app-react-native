import { FlatList, Text, View, StyleSheet} from "react-native"
import { Ionicons } from '@expo/vector-icons';




function LeaderboardsItem({name, points}){
    return (
        <View style = {styles.container}>
            
            <View style = {styles.textContainer}>
                    <Text style = {styles.textUsername}>{name}</Text>
                    <Text style = {styles.textPoints}>{points}</Text>
            </View>
            <View style = {styles.arrowContainer}>
                    <Ionicons 
                            name = {"arrow-forward-circle"}
                            size = {25}
                            
                    />
            </View>
        </View>
    )
}

export default LeaderboardsItem

const styles = StyleSheet.create({

    container : {
        flexDirection : 'row',
        backgroundColor : 'lightblue',
        paddingVertical : 10,
        margin : 10,
        borderRadius : 10
    },

    textContainer : {
        paddingLeft : 25
    },

    arrowContainer : {
        justifyContent : 'center',
        paddingLeft : '65%'
    },

    textUsername : {
        fontSize : 18,
    },

    textPoints : {
       
    },
   
  })