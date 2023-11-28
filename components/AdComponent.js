import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-5141446489399410~2069204103';
import { View, StyleSheet } from 'react-native';

export default function AdComponent(){
    return (
        <View style={myStyle.adSection}>
            <BannerAd
                unitId={adUnitId}
                size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
        />
        </View>
    );
}

const myStyle = StyleSheet.create({
    adSection:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: 50
    }
})