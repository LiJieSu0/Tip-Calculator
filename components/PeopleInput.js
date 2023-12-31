import React,{useState,useRef} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Alert } from 'react-native';
// import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

export default function PeopleInput(props){
    const {setPeople,people}=props;
    const [peopleText,setPeopleText]=useState('1');
    const textInputRef=useRef(null);
    return(
        <View style={myStyle.peopleInputSection}>
            {/* －－－－－－－－－－－－－－－－－－－－(｡･ω･｡)ﾉ－－－－－－－－－－－－－－－－ */}
            {/* sub people amount */}
            <View style={myStyle.subBtn}>
                <TouchableOpacity onPress={()=>{
                    if(people==1)
                        return;
                    setPeople(parseInt(people)-1);
                    let tmp=parseInt(people);
                    tmp--;
                    setPeopleText(tmp.toString());
                }}>
                {/* <Text style={myStyle.subBtnFont}>-</Text> */}
                {/* <AntDesign name="plus" size={24} color="black" /> */}
                <AntDesign name="minus" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* add people amount */}
            <View style={myStyle.addBtn}>
                <TouchableOpacity onPress={()=>{
                    if(people>=999)
                        return;
                    setPeople(parseInt(people)+1);
                    // console.log(people);
                    let tmp=parseInt(people);
                    tmp++;
                    setPeopleText(tmp.toString());
                }}>
                <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
            </View>   
                
            {/* －－－－－－－－－－－－－－－－－－－－(｡･ω･｡)ﾉ－－－－－－－－－－－－－－－－ */}
            {/* people amount TextInput */}
            <TextInput
                ref={textInputRef}
                style={myStyle.peopeinput}
                keyboardType='numeric'
                onFocus={()=>{
                    setPeopleText('');
                    setPeople(1);
                ;}}
                onBlur={()=>{
                    if(peopleText==''){
                        setPeopleText('1');
                    }
                }}
                onChangeText={(val)=>{
                    const cleanedValue = val.replace(/^0+/, '');
                    const formattedValue = cleanedValue.replace(/[^0-9]/g, '');

                    if(formattedValue>999){
                        Alert.alert('Oops!','The number is too large, please enter the people number again.',[
                            {text:'Understood'}
                        ])
                        textInputRef.current.blur();
                        setPeople(1);
                        setPeopleText('1');
                        return;
                    }

                    if(formattedValue==''){
                        setPeople(1);
                        setPeopleText('1');
                    }
                    setPeople(formattedValue==''?1:formattedValue);
                    setPeopleText(formattedValue.toString());
                }}
                value={peopleText}
            />
        </View>
    );
}

const myStyle=StyleSheet.create({
    peopleInputSection:{
        width: 150,
        height: 50,
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderRadius: 20,
    },
    peopeinput:{
        width: 35,
        height: 35,
        fontSize: 20,
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
        left: 20
    },
    subBtnFont:{
        fontSize:60,
    },
    addBtn:{
        position: 'absolute',
        right: 23
    },
    addBtnFont:{
        fontSize:60,
    }
})