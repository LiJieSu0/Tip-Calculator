
import {View, TextInput, Alert} from 'react-native';


import { MaterialIcons } from '@expo/vector-icons'; 
import { globalStyles } from '../GlobalStyle';

export default function CostComponent(props){
    const{setBill,bill}=props;

    return (
        <View style={globalStyles.inputLabelContainer}>
        <MaterialIcons name="attach-money" 
                        size={20} color="black" 
                        style={globalStyles.iconStyle}/>
            <TextInput
                style={globalStyles.input}
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