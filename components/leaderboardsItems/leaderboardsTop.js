import { FlatList, Text, View, StyleSheet} from "react-native"


function LeaderboardsTop({name, points,position}){

    return (
      
        <View style = {styles.container}>
                <View style = {styles.topContainer}>
                    <Text style = {styles.topText}>{position}</Text>
                </View>
                <View style = {styles.textContainer}>
                    <Text style = {styles.textUsername}>{name}</Text>
                    <Text style = {styles.textPoints}>{points}</Text>
                </View>
        </View>

      
    )

}

export default LeaderboardsTop

const styles = StyleSheet.create({

    container : {
        backgroundColor : 'lightblue',
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        borderRadius: 1000,
        marginVertical : 25,
        marginHorizontal : '30%'
    },

    topContainer : {
        width: 50,
        height: 50,
        borderRadius: 1000,
        backgroundColor : 'blue',
        justifyContent: "center",
        alignItems: "center",
        top : -50
    },

    textContainer : {
        justifyContent: "center",
        alignItems: "center",
        top : -25
    },

    top : {

    },

    text : {
       
    }
   
  })