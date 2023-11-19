import { View,StyleSheet,Text } from "react-native"
import PeopleInput from "./PeopleInput"
import { Ionicons } from '@expo/vector-icons';

export default function PeopleComponent(props){

    const{people,setPeople,perCost}=props;

    return(
        <View>
            <View style={myStyle.peopleSection}>
                <Ionicons 
                    name="ios-people-outline" 
                    size={35} 
                    color="black" 
                    style={myStyle.peopleIcon}
                />
                {/* people component */}
                <PeopleInput people={people} setPeople={setPeople}/>

                <Text style={myStyle.paySection}>
                    You pay: {"\n"}${ perCost}{"\n"}
                </Text>
            </View>
        </View>
    )
}

const myStyle = StyleSheet.create({
    peopleSection:{
        flex: 1,
        paddingTop: 33,
        // backgroundColor: 'tomato',
    },
    peopleIcon:{
        position: 'absolute',
        marginLeft: 55,
    },
    paySection:{
        position: 'absolute',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 165,
        fontStyle: 'italic',
    },
})
