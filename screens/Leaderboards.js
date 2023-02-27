import { FlatList, Text, View, StyleSheet, ScrollView} from "react-native"
import LeaderboardsItem from "../components/leaderboardsItems/leaderboardItems"
import LeaderboardsTop from "../components/leaderboardsItems/leaderboardsTop";

const leaderData = [
    {
        name : 'random1',
        points: 1000,
    },
    {
        name : 'random2',
        points: 1000,
    },
    {
        name : 'random3',
        points: 1000,
    },
    {
        name : 'random4',
        points: 1000,
    },
    {
        name : 'random5',
        points: 1000,
    },
    {
        name : 'random6',
        points: 1000,
    },
];

function Leaderboards(){
    return (
        <View style = {styles.container}>
           <View style = {styles.topContainer} >
                
                <LeaderboardsTop
                    name = {'random2'}
                    points = {1000}
                    position = {2}
                />

                <LeaderboardsTop
                    name = {'random1'}
                    points = {1000}
                    position = {1}
                />
                
                <LeaderboardsTop
                    name = {'random3'}
                    points = {1000}
                    position = {3}
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
        top : 20,
        right : 340,
        paddingLeft : 350

    },

    leaderitemScroll : {
        height : 380
    }
   
  })