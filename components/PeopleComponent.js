

import { View,StyleSheet,Text } from "react-native"
import PeopleInput from "./PeopleInput"
import { Ionicons } from '@expo/vector-icons';

export default function PeopleComponent(props){
    const{people,setPeople,perCost}=props;
    return(
        <View>
            <View>
                <Ionicons name="ios-people-outline" 
                    size={35} 
                    color="black" 
                    style={myStyle.peopleIcon}
                />
                {/* people component */}
                <PeopleInput people={people} setPeople={setPeople}/>
            </View>
            <View>
                {/* you pay and total tip  */}
                <Text style={myStyle.payStyle}>
                    You pay: {"\n"}${ perCost}{"\n"}
                </Text>
            </View>
        </View>
    )
}

const myStyle=StyleSheet.create({
    payStyle:{
        width: 250,
        height: 80,
        fontSize: 28,
        marginLeft: 10,
        fontWeight: 'bold',
        marginTop: 15,
    },
    peopleIcon:{
        marginLeft: 55,
    },
})
