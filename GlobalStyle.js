import { StyleSheet} from 'react-native';

export const globalStyles  = StyleSheet.create({
    container: {
        top: 50,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        borderWidth:1,
        borderColor:"black",
    },
    font:{
        fontSize: 16,
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },
    input:{
        borderWidth:1,
        borderColor:'black',
        marginTop:5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        height: 40,
        borderRadius: 5,

    },
    colorStyle:{
        color:'green'
    },
    inputLabelContainer:{
        flex:1,
        backgroundColor:'yellow',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10,
    },
    btnContainer:{
        flex:1,
        backgroundColor:'green',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    }
});