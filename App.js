import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image } from 'react-native';
import Homepage from './screens/Homepage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddQuestion from './screens/AddQuestion';
import QuizGame from './screens/QuizGame';
import Leaderboards from './screens/Leaderboards';
import IconButton from './components/UI/IconButton';
import { Provider } from 'react-redux';
import store from './redux';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store = {store}>
      <>
        <StatusBar style='dark'/>
        <NavigationContainer>
              <Stack.Navigator
                  screenOptions={{
                          headerStyle : {
                              backgroundColor : '#F5F7FB'
                          },

                          headerTintColor : "#293264",

                          contentStyle : {
                            backgroundColor : '#F5F7FB', 
                          }

                      }}
              >

                  <Stack.Screen 
                      name = 'Homepage'
                      component={Homepage}
                      options = {({navigation}) => ({
                          title : 'Home',
                          headerRight : ({ tintColor }) => (
                            <IconButton 
                                icon = "add"
                                size = {24}
                                color = {tintColor}
                                onPress = {() => navigation.navigate('AddQuestion')}
                            />
                        )
                          
                      })}
                  />

                  <Stack.Screen 
                      name = 'QuizGame'
                      component={QuizGame}
                      options = {{
                        title : 'Add Questions',
                        
                      }}
                  
                  />

                  <Stack.Screen 
                      name = 'Leaderboards'
                      component={Leaderboards}
                      options = {{
                        title : 'Add Questions',
                        
                      }}
                  
                  />


                  <Stack.Screen 
                      name = 'AddQuestion'
                      component={AddQuestion}
                      options = {{
                        title : 'Add Questions',
                        
                      }}
                  
                  />

              </Stack.Navigator>
        </NavigationContainer>

                        
        <Image 
            source={require('./assets/backgroundimages/shape-1.png')}
            style={styles.imageTop}
        />

        <Image 
            source={require('./assets/backgroundimages/shape-2.png')}
            style={styles.imageBottom}
            
        />
      </>
    </Provider>
  );
}

const styles = StyleSheet.create({
  

  imageTop : {
      width : 110,
      height : 90,
      right : 0,
      top : 81,
      position : 'absolute',
      
  },

  imageBottom : {
      width : 110,
      height : 90,
      left : 0,
      bottom : 0,
      position : 'absolute'
  },

 
})


