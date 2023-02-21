
import { Image, Pressable, Text ,View, StyleSheet, Picker} from "react-native"
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import Dropdown from "../components/UI/Dropdown";
import UniversalButton from "../components/UI/UniversalButton";
import {updateQuestionNumber,updateCategoryNumber,updateGameDifficulty} from "../redux/GameStateRedux"
import {useDispatch} from "react-redux"

const data = [{
    label : 'Any Category',
    value: 0,
  }, {
    label: 'General Knowledge',
    value : 9
  }, {
    label: 'Entertainment: Books',
    value : 10
  }];

  const data1 = [{
    label : '1',
    value: 1,
  }, {
    label: '2',
    value : 2
  }, {
    label: '3',
    value : 3
  }];

  const data2 = [{
    label : 'Hard',
    value: 'hard',
  }, {
    label: 'Medium',
    value : 'medium'
  }, {
    label: 'Easy',
    value : 'easy'
  }];

function Homepage({navigation}){

    const [categoryOpen, setCategoryOpen] = useState(false);
    const [categoryValue, setCategoryValue] = useState(null);
    const [category, setCategory] = useState(data)

    const [questionOpen, setQuestionOpen] = useState(false);
    const [questionValue, setQuestionValue] = useState(null);
    const [question, setQuestion] = useState(data1)

    const [difficultyOpen, setDifficultyOpen] = useState(false);
    const [difficultyValue, setDifficultyValue] = useState(null);
    const [difficulty, setDifficulty] = useState(data2)

    const [pickedCategory, setPickedCategory] = useState(null)
    const [pickedDifficulty, setPickedDifficulty] = useState(null)
    const [pickedQuestion, setPickedQuestion] = useState(null)

    const dispatch = useDispatch()
   
    function startQuizHandler(){

        navigation.navigate('QuizGame', {
            category : pickedCategory,
            question : pickedQuestion,
            difficulty : pickedDifficulty
        })
    }

    function leaderboardsHandler(){
        navigation.navigate('Leaderboards')
    }
    
    function onChangeCategory(item){
        setPickedCategory(item)
        dispatch(updateCategoryNumber(item.value))
        
    }

    function onChangeQuestion(item){
        dispatch(updateQuestionNumber(item.value))
      
     }

     function onChangeDifficulty(item){
        dispatch(updateGameDifficulty(item.value))
        
     }

    return(
        <View style = {styles.container}>

            <View style = {styles.titleContainer}>
                <Text style = {styles.titleText}>Quiz App</Text>
            </View>
            <View style = {styles.dropdownContainer}>
                <Dropdown 
                    placeholder = {'Category'}
                    category = {category}
                    categoryOpen = {categoryOpen}
                    categoryValue = {categoryValue}
                    setCategory = {setCategory}
                    setCategoryOpen = {setCategoryOpen}
                    setCategoryValue = {setCategoryValue}
                    z = {3000}
                    zInverse={1000}
                    onChange = {onChangeCategory}
                    
                
                />
          
                <Dropdown 
                    placeholder = {'Amount of Questions'}
                    category = {question}
                    categoryOpen = {questionOpen}
                    categoryValue = {questionValue}
                    setCategory = {setQuestion}
                    setCategoryOpen = {setQuestionOpen}
                    setCategoryValue = {setQuestionValue}
                    z = {2000}
                    zInverse={2000}
                    onChange = {onChangeQuestion}
                
                    />


                <Dropdown 
                    placeholder = {'Difficulty'}
                    category = {difficulty}
                    categoryOpen = {difficultyOpen}
                    categoryValue = {difficultyValue}
                    setCategory = {setDifficulty}
                    setCategoryOpen = {setDifficultyOpen}
                    setCategoryValue = {setDifficultyValue}
                    z = {1000}
                    zInverse={3000}
                    onChange = {onChangeDifficulty}
                
                    />
            </View>

            <View style = {styles.buttonContainer}>

                <UniversalButton
                    onPress={startQuizHandler}
                >
                    Start Quiz!
                </UniversalButton>

                <UniversalButton
                    onPress={leaderboardsHandler}
                >
                    Leaderboards!
                </UniversalButton>

            </View>

         
        
        </View>
    )

}

export default Homepage

const styles = StyleSheet.create({
   
    container : {
        flex : 1,
        justifyContent :'center',
        alignItems : 'center' 
        
    },
    titleContainer : {
       marginBottom : 10
        
        
    },

    titleText : {
        fontStyle : 'italic',
        fontSize : 20,
    },

    dropdownContainer : { 
        width : '50%',
       
     },

     buttonContainer : {
        flexDirection : 'row'
     }

   
   
})