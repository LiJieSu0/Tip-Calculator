import { StyleSheet} from 'react-native';

export const globalStyles  = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#faf1e4',
    },
    button:{
        borderWidth:1,
        borderColor:"black",
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },
    iconStyle:{
        fontSize: 30,
        position: 'absolute',
        marginTop: 30,
        marginLeft: 8,
    },
    // public total cost and custom tip input
    input:{
        flex: 1,
        width: '100%',
        height: 60,
        marginTop: 15,
        borderWidth:1,
        borderColor:'black',
        borderRadius: 20,
        paddingLeft: 40,
        fontSize: 18,
        marginBottom: 10,
    },

    // total input 
    inputLabelContainer:{
        flexDirection:'row',
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

