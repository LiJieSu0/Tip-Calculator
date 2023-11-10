import React,{useState,useContext,createContext} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Image} from 'react-native';
import { globalStyles } from '../GlobalStyle';

export default function PeopleComponent(props){
    const {setPeople,people}=props;
    return(
        <View style={myStyle.peopleInputLabelContainer}>
            {/* －－－－－－－－－－－－－－－－－－－－(｡･ω･｡)ﾉ－－－－－－－－－－－－－－－－ */}
            <View style={myStyle.btn}>
                <TouchableOpacity  onPress={()=>{
                    if(people==1)
                        return;
                    setPeople(people-1);
                }}>

                <Text>-</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    setPeople(people+1);
                }}>

                <Text>+</Text>
                </TouchableOpacity>
            </View>
            
            {/* －－－－－－－－－－－－－－－－－－－－(｡･ω･｡)ﾉ－－－－－－－－－－－－－－－－ */}
            {/* people amount TextInput */}
            <TextInput
                style={myStyle.peopeinput}
                placeholder=' 1 '
                onChangeText={(val)=>{
                    setPeople(val);
                }}
                value={people}
            />

            

        </View>
    );
}

const myStyle=StyleSheet.create({
    peopleInputLabelContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    peopeinput:{
        width: 30,
        height: 30,
        fontSize:10,
        marginBottom: 5,
        borderWidth:1,
        borderColor:'black',
        borderRadius: 20,
        paddingLeft: 10,
    },
    btnTxt:{
        fontSize:20,
        padding:5,
    },
})