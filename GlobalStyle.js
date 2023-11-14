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
    imageStyle:{
        position: 'absolute',
        marginTop: 18,
        marginLeft: 15,
    },
    input:{
        flex: 1,
        height: 50,
        marginTop:5,
        borderWidth:1,
        borderColor:'black',
        borderRadius: 20,
        paddingLeft: 40,
        fontSize: 18,
        marginBottom: 5,
    },
    inputLabelContainer:{
        flexDirection:'row',
        width: 350,
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

