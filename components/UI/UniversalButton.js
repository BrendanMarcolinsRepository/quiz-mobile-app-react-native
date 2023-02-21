import { Pressable, Text, StyleSheet} from "react-native"

function UniversalButton({children, onPress}){

    return(
        <Pressable
        style = {(pressed) => [styles.button, pressed && styles.pressed]}
        onPress = {onPress}
    >
        <Text style = {styles.text}>
            {children}
        </Text>
    </Pressable>
    )

}

export default UniversalButton

const styles = StyleSheet.create({

    button : {
        paddingHorizontal : 6,
        paddingVertical : 6,
        margin : 4,
        backgroundColor : '#d6cce4',
        
        //android stuff
        elevation : 2,

        //ios stuff
        shadowColor : 'black',
        shadowOpacity : '0.15',
        shadowOffset : {width : 1, height : 1},
        shadowRadius : 2,
        borderRadius : 4
    },

    pressed : {
        opacity : 0.8
    },

    text : {
        textAlign : 'center',
        fontSize : 14,
        color : 'black'
    },
    
})
