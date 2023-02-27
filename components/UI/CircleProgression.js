import { FlatList, Text, View, StyleSheet, Pressable} from "react-native"

function CircleProgression({children}){

    console.log("chikdren + " + children )

    function working(){
        console.log('log')
    }

    return(
        <Pressable 
            onPress={working}
            style = {styles.container}>
            <Text style = {styles.textContainer}>{children}</Text>
        </Pressable>
    )

}

export default CircleProgression

const styles = StyleSheet.create({
   
    container : {
        width: 50,
        height: 50,
        borderRadius: 1000,
        backgroundColor : 'lightblue',
        justifyContent: "center",
        alignItems: "center",
        
    },

    textContainer : {
        justifyContent: "center",
        alignItems: "center",
        
    },
        
})