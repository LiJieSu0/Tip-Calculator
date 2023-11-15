import { View, Text,StyleSheet } from 'react-native';


export default function SummaryComponent(props){
    const {bill,percentage,people}=props;
    const totalTip=(bill*percentage/100);
    const splitTip=(bill*percentage/100/people);
    return(
        <View>
            <Text style={myStyle.tipStyle}>
                Total Tip: ${(Math.ceil(totalTip*100)/100).toFixed(2)}{'\n'}
                Split Tip: ${(Math.ceil(splitTip*100)/100).toFixed(2)}
            </Text>
        </View>

    );
}

const myStyle=StyleSheet.create({
    tipStyle: {
        fontSize: 12,
        color: '#b4b1b1'
    },
})