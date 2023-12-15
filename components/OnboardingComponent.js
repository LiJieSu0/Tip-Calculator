import { useState,useRef } from 'react';
import {Text,View, FlatList,Animated,Button,Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';



export default function OnboardingComponent(props){
    const {navigation}=props;
    
    return(
            <Onboarding
            onDone={()=>navigation.navigate('Home')}
            onSkip={()=>navigation.navigate('Home')}
            pages={[
                {
                    backgroundColor: '#fff',
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                    image: <Image source={require('../assets/add.png')} />,
                },
                {
                    backgroundColor: '#fff',
                    title: 'Onboarding2',
                    subtitle: 'Done with React Native Onboarding Swiper',
                    image: <Image source={require('../assets/custom-tip.png')} />,
                },
                {
                    backgroundColor: '#fff',
                    title: 'Onboarding2',
                    subtitle: 'Done with React Native Onboarding Swiper',
                    image: <Image source={require('../assets/total-cost.png')} />,
                }
            ]}
            />
    )
}

const slides=[
    {
        id:'1',
        title:'first onboarding page',
        description:'this is the first page ',
        img:require('../assets/icon.png')
    },
    {
        id:'2',
        title:'second page',
        description:'this is the second page',
        img:require('../assets/icon.png')
    },
    {
        id:'3',
        title:'end page',
        description:'this is the end page',
        img:require('../assets/icon.png')
    },
]