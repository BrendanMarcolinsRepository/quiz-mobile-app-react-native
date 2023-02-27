import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({icon, size, color, onPress, text}){

    return(
        <Pressable
            style = {({pressed}) => [styles.button, pressed && styles.pressed]}
            onPress = {onPress}
        >
            <View style = {styles.textContainer}>
                <Text style = {styles.text}>{text}</Text>
                <Ionicons 
                    name = {icon}
                    size = {size}
                    color = {color}
                />
            </View>
        </Pressable>
    )

}

export default IconButton

const styles = StyleSheet.create({

    textContainer : {
        flexDirection : 'row'
    },

    text : {
        fontSize : 18
    },


    button: {
      padding: 8,
      margin: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    pressed: {
      opacity: 0.7,
    },
  });
