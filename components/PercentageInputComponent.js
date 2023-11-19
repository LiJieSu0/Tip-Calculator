import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { View, TextInput,  Alert, StyleSheet,Text} from 'react-native';
import { globalStyles } from '../GlobalStyle';

import SummaryComponent from './SummaryComponent';

export default function PercentageInputComponent(props){
    const {setPercentage,percentage,bill,people}=props
    return(
                <View style={myStyle.percentageSection}>
                    <MaterialCommunityIcons 
                        name="lightbulb-outline" 
                        color="black" 
                        style={myStyle.iconStyle} 
                    />       
                    {/* % percentage input */}
                    <TextInput
                        style={myStyle.input}
                        placeholder='Custom tip'
                        keyboardType='numeric'
                        onChangeText={(val)=>{
                            if(val>2000){
                                Alert.alert('Oops!','The number is too large, please enter the percentage number again.',[
                                    {text:'Understood'}
                                ])
                                setPercentage(10);
                                return;
                            }
                            const match = val.match(/^\d+(\.\d{0,2})?/);
                            const formattedValue = match ? match[0] : '';
                            setPercentage(formattedValue);
                        }}
                        value={percentage.toString()}
                    />
                    {/* % percentage icon */}
                    <Text style={myStyle.percentageIcon}>%</Text>

                    {/* total tip and splite tip*/}    
                    <SummaryComponent 
                        bill={bill}
                        people={people}
                        percentage={percentage}
                    />   

                </View>
    )
}

const myStyle=StyleSheet.create({
    percentageSection:{
        width: '100%',
        height: 50,
        marginTop: 15,
        borderWidth:1,
        borderRadius: 20,
    },
    input:{
        width: '100%',
        height: 50,
        paddingLeft: 40,
        fontSize: 18,
    },
    iconStyle:{
        position: 'absolute',
        fontSize: 28,
        left: 10,
        top: 10
    },
    percentageIcon:{
        position: 'absolute',
        right: 0,
        alignSelf: 'center',
        paddingTop: 5,
        paddingRight: 15,
        fontSize: 28
    },
})
