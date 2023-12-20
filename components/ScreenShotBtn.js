import { captureRef } from 'react-native-view-shot';
import React, { useRef,useState } from 'react';
import { View,Button, Text, Image, StyleSheet } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import Share from 'react-native-share';

export default function ScreenShotBtn({screenRef}){
    const [status, requestPermission] = MediaLibrary.usePermissions();
    if (status === null) {
        requestPermission();
    }
    const imageRef = useRef();
    const onSaveImageAsync = async () => {
        try {
            const localUri = await captureRef(screenRef, {
            height: 440,
            quality: 1,
            });

            await MediaLibrary.saveToLibraryAsync(localUri);
            if (localUri) {
                shareImage(localUri);
            }
        } catch (e) {
            console.log(e);
        }
    };
    const shareImage = async (imagePath) => {
        const shareOptions = {
        message: 'Here is the tip result!',
        url: `${imagePath}`,
        };
    
        try {
            await Share.open(shareOptions);
        } catch (error) {
            console.error('Error sharing image:', error);
        }
    };
    return(
        <View ref={imageRef}  collapsable={false}>
            <Text>Some text I want to take screenshot</Text>
            <Button
                title='Screen Shot'
                onPress={onSaveImageAsync}
            />
        </View>
    )
}