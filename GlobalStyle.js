import { StyleSheet} from 'react-native';

export const globalStyles  = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        borderWidth:1,
        borderColor:"black",
    },
    result:{
        
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },
    imageStyle:{
        position: 'absolute',
        marginTop: 10,
        marginLeft: 5,
    },
    input:{
        flex: 1,
        height: 40,
        marginTop:5,
        borderWidth:1,
        borderColor:'black',
        borderRadius: 20,
        paddingLeft: 40,
        fontSize: 14,
        marginBottom: 5,
    },
    inputLabelContainer:{
        flexDirection:'row',
        width: 300,
    },
    btnContainer:{
        marginTop: 7,
        flexDirection:'row',
        columnGap: 18,
        marginBottom: 5,
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },
});

