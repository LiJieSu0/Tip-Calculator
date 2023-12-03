import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AsyncStorage } from 'react-native';
import { useEffect, useState } from 'react';

import { OnboardingScreen } from '../screens/OnboardingScreen';

const Stack = createNativeStackNavigator();

export default function onboardingComponent() {

  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  useEffect( () => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value === null){
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      }else{
        setIsFirstLaunch(false);
      }
    })
  })

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isFirstLaunch && (
          <Stack.Screen 
            options={{ headerShown: false }} 
            name="OnboardingScreen" 
            component={OnboardingScreen} 
          />
        )}
        
        {/* <Stack.Screen 
            options={{ headerShown: false }} 
            name="Home" 
            component={Home} 
        /> */}
      </Stack.Navigator>
  </NavigationContainer>
  );
}


