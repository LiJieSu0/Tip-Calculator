import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const globalStyles  = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#faf1e4',
    },
    main:{
        width: wp(90),
        height: wp(90),
    },
    card:{
        marginTop: 200,
        width: wp(100),
        height: wp(100),
        alignContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        // only for ios
        shadowOffset:{
            width:6,
            height: 6,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    elevation:{
        elevation: 20,
        shadowColor: '#52006A',
    },
    adComponent:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});

