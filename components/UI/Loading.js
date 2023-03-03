
import { View, StyleSheet, ActivityIndicator} from "react-native"
function Loading(){

    return(

        <View style = {styles.container}>
            <ActivityIndicator 
                size={80 || 'large' } 
                color="lightblue" 
            />
        </View>
    
    ) 
}

export default Loading


const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignContent : 'center'  
    },

 
})