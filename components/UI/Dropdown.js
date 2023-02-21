import { Pressable, StyleSheet, View,  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

function Dropdown(props){

    function onChangeHandler(item){
        
        props.onChange(item)
    }

    return(
        
                <DropDownPicker
                    style={styles.dropdown}
                    open={props.categoryOpen}
                    value={props.categoryValue} //genderValue
                    items={props.category}
                    setOpen={props.setCategoryOpen}
                    setValue={props.setCategoryValue}
                    setItems={props.setCategory}
                    placeholder={props.placeholder}
                    placeholderStyle={styles.placeholderStyles}
                    zIndex={props.z}
                    zIndexInverse={props.zInverse}
                    autoScroll={true}
                    onSelectItem={(item) => {
                        onChangeHandler(item)
                      }}
     
                  
                
                />
   
    )

}

export default Dropdown

const styles = StyleSheet.create({


    placeholderStyles: {
        color: "grey",
      },

    dropdown: {
        borderColor: "#B7B7B7",
        height: 50,
        marginBottom: 20
        
        
      },

    
})