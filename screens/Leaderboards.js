import { FlatList, Text, View, StyleSheet, ScrollView} from "react-native"
import LeaderboardsItem from "../components/leaderboardsItems/leaderboardItems"
import LeaderboardsTop from "../components/leaderboardsItems/leaderboardsTop";
import { Ionicons } from '@expo/vector-icons';

const leaderData = [
    {
        name : 'Brendan',
        points: 1000,
    },
    {
        name : 'Shane',
        points: 1000,
    },
    {
        name : 'Joel',
        points: 1000,
    },
    {
        name : 'Ellie',
        points: 1000,
    },
    {
        name : 'Phoebe',
        points: 1000,
    },
    {
        name : 'John',
        points: 1000,
    },
];

function Leaderboards(){
    return (
        <View style = {styles.container}>
           <View style = {styles.topContainer} >
                <Ionicons 
                    name = {"trophy"}
                    size = {125}
                    color = 'silver'
                                    
                />
                <Ionicons 
                    name = {"trophy"}
                    size = {150}
                    color = 'gold'
                                    
                />
                <Ionicons 
                    name = {"trophy"}
                    size = {100}
                    color = 'brown'
                                    
                />
            </View>
           <View   style = {styles.leaderitemScroll}>
                <FlatList 
                        //style = {styles.list}
                        data={leaderData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem = {({item}) => (
                        

                            <ScrollView>
                                <LeaderboardsItem
                                    name = {item.name}
                                    points = {item.points}
                                    
                                    
                                />
                            </ScrollView>

                            
                        )}
                    />
            </View>
        </View>
    )
}

export default Leaderboards

const styles = StyleSheet.create({

    container : {
        flexDirection : 'column',
        flex : 1,
        marginTop : 100
    },

    topContainer : {
        flexDirection : 'row',
        marginHorizontal : 10
      

    },

    leaderitemScroll : {

        height : 375
    }
   
  })