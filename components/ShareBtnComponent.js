import React from 'react';
import {Alert, Share, View, Button, StyleSheet} from 'react-native';


export default function ShareBtnComponent(){
   
    const onShare = async () => {
        try {
            const result = await Share.share({
            message:
                'App Link',
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
        } 
        else if (result.action === Share.dismissedAction) {
            // dismissed
        }
        }catch (error) {
            Alert.alert(error.message);
        }
    };
    return (
        <View style={myStyle.shareSection}>
            <Button onPress={onShare} title="Share" />
        </View>
    );
}

const myStyle = StyleSheet.create({
    shareSection:{
        width: '100%',
        height: 50,
        marginTop: 100,
        marginBottom: 50,
    }
})