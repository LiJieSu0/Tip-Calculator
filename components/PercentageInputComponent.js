import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { View, TextInput,  Alert, StyleSheet,Text} from 'react-native';
import { globalStyles } from '../GlobalStyle';


export default function PercentageInputComponent(props){
    const {setPercentage,percentage}=props
    return(
                <View style={globalStyles.inputLabelContainer}>
                    <MaterialCommunityIcons name="lightbulb-outline" size={24} color="black" 
                                            style={globalStyles.iconStyle} />       
                    {/* % percentage input */}
                    <TextInput
                        style={globalStyles.input}
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
                </View>
    )
}

const myStyle=StyleSheet.create({
    percentageIcon:{
        position: 'absolute',
        right: 0,
        alignSelf: 'center',
        paddingTop: 5,
        paddingRight: 15,
        fontSize: 28
    },
})
