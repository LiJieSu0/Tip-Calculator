import { View, TextInput, Alert, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function CostComponent(props){

    const{setBill,bill}=props;

    return (
        <View style={myStyle.costSection}>
            <MaterialIcons 
                name="attach-money" 
                color="black" 
                style={myStyle.iconStyle}
            />

            <TextInput
                style={myStyle.input}
                placeholder='Total Cost'
                keyboardType='numeric'
                onChangeText={(val)=>{
                    if(val>99999999){
                        Alert.alert('Oops!','The number is too large, please enter the bill number again.',[
                            {text:'Understood'}
                        ])
                        setBill(0);
                        return;
                    }
                    const match = val.match(/^\d+(\.\d{0,2})?/);
                    const formattedValue = match ? match[0] : '';
                    setBill(formattedValue);
                }}
                value={bill==0?'':bill.toString()}
            />
        </View>
    );
}

const myStyle = StyleSheet.create({
    costSection:{
        width: '100%',
        height: 50,
        marginTop: 70,
        borderWidth:1,
        borderRadius: 20,
    },
    iconStyle:{
        position: 'absolute',
        fontSize: 28,
        left: 10,
        top: 10
    },
    input:{
       width: '100%',
       height: 50,
       paddingLeft: 40,
       fontSize: 18,
    }
})