import React,{useState,useContext,createContext} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';

export default function PeopleComponent(props){
    const {setPeople,people}=props;
    return(
        <View style={myStyle.peopleInputLabelContainer}>

            {/* －－－－－－－－－－－－－－－－－－－－(｡･ω･｡)ﾉ－－－－－－－－－－－－－－－－ */}
            {/* sub people amount */}
            <View style={myStyle.subBtn}>
                <TouchableOpacity onPress={()=>{
                    if(people==1)
                        return;
                    setPeople(people-1);
                }}>
                <Text style={myStyle.subBtnFont}>-</Text>
                </TouchableOpacity>
            </View>

            {/* add people amount */}
            <View style={myStyle.addBtn}>
                <TouchableOpacity onPress={()=>{
                    setPeople(people+1);
                }}>
                <Text style={myStyle.addBtnFont}>+</Text>
                </TouchableOpacity>
            </View>   
                
            {/* －－－－－－－－－－－－－－－－－－－－(｡･ω･｡)ﾉ－－－－－－－－－－－－－－－－ */}
            {/* people amount TextInput */}
            <TextInput
                style={myStyle.peopeinput}
                placeholder=' 1 '
                keyboardType='numeric'
                onChangeText={(val)=>{
                    setPeople(val);
                }}
                value={people.toString()}
            />
        </View>
    );
}

const myStyle=StyleSheet.create({
    peopleInputLabelContainer:{
        width: 150,
        height: 40,
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:'black',
        borderRadius: 20,
    },
    peopeinput:{
        width: 35,
        height: 35,
        fontSize:16,
        borderWidth:1,
        borderColor:'black',
        borderRadius: 20,
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft: 55,
        alignItems: 'center',
    },
    subBtn:{
        position: 'absolute',
        left: 25
    },
    subBtnFont:{
        fontSize:40,
    },
    addBtn:{
        position: 'absolute',
        right: 25
    },
    addBtnFont:{
        fontSize:30,
    }
})