import { Pressable, Text, StyleSheet} from "react-native"

function UniversalButton({children, onPress, customStyle}){

    return(
        <Pressable
        style = {(pressed) => [customStyle ? customStyle : styles.button , pressed && styles.pressed]}
        onPress = {onPress.bind(this,children)}
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
        paddingHorizontal : 12,
        paddingVertical : 12,
        margin : 4,
        backgroundColor : '#d6cce4',
        
        //android stuff
        elevation : 2,

        //ios stuff
        shadowColor : 'black',
        shadowOpacity : '0.15',
        shadowOffset : {width : 1, height : 1},
        shadowRadius : 2,
        borderRadius : 4, 
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
