import { View, Text, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

const OnboardingScreen = () => {

  const navigation = useNavigation();

  const DotComponent = ({selected}) => {
    return(
        <View className={`w-4 h-4 flex items-center justify-center rounded-full ${selected ? 'border border-red-400' : ''} p-2`} >
            <View className={`w-2 h-2 ${ selected ? 'bg-red-400' : 'bg-red-200'} rounded-full `}>
            </View>
        </View>
    )
  }

  return (
    <Onboarding          
        // onSkip={ () => navigation.navigate("Calculator") }
        // onDone={ () => navigation.navigate("Calculator") }
        DotComponent = {DotComponent}

        pages={[
            {
            backgroundColor: '#fff',
            image: <Image source={{url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.insperity.com%2Fblog%2Femployee-onboarding%2F&psig=AOvVaw2zppUi6-Ou2z6qLUxqwLYb&ust=1701664336226000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNi-meS38oIDFQAAAAAdAAAAABAE'}} 
                    className = 'w-72 h-72 object-contain'
            />,
            title: '1',
            subtitle: '1',
            },

            {
            backgroundColor: '#fff',
            image: <Image source={{url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.insperity.com%2Fblog%2Femployee-onboarding%2F&psig=AOvVaw2zppUi6-Ou2z6qLUxqwLYb&ust=1701664336226000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNi-meS38oIDFQAAAAAdAAAAABAE'}} 
                    className = 'w-72 h-72 object-contain'
            />,
            title: '2',
            subtitle: '2',
            },

            {
            backgroundColor: '#fff',
            image: <Image source={{url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.insperity.com%2Fblog%2Femployee-onboarding%2F&psig=AOvVaw2zppUi6-Ou2z6qLUxqwLYb&ust=1701664336226000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNi-meS38oIDFQAAAAAdAAAAABAE'}} 
                    className = 'w-72 h-72 object-contain'
            />,
            title: '3',
            subtitle: '3',
            },
        ]}
    />
  )
}

export default OnboardingScreen