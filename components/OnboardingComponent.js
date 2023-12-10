import { useState,useRef } from 'react';
import {Text,View, FlatList,Animated,Button} from 'react-native';
import OnboardingItem from './OnboardingItem';


export default function OnboardingComponent(props){
    const {navigation}=props;
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNextPress = () => {
        let nextIndex = currentIndex + 1;
        if(slides.length<=nextIndex)
            nextIndex=slides.length-1;
        setCurrentIndex(nextIndex);
        console.log(currentIndex);
        flatListRef.current?.scrollToIndex({
            animated: true,
            index: nextIndex,
        }); 
    };
    const handlePrevPress = () => {
        const prevIndex = currentIndex - 1;
        setCurrentIndex(prevIndex < 0 ? 0 : prevIndex);
        flatListRef.current?.scrollToIndex({
            animated: true,
            index: prevIndex < 0 ? 0 : prevIndex,
        });
    };

    const handleFinishPress=async()=>{
        console.log("finish")
        navigation.navigate('Home');
    }

    return(
        <View style={{flex:3}}>
        <FlatList data={slides}
            ref={flatListRef}
            renderItem={({item}) => <OnboardingItem item={item}/>}
            keyExtractor={item=>item.id}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator
            contentContainerStyle={{flexGrow:1}}
            onMomentumScrollEnd={(event) => {
                const contentOffset = event.nativeEvent.contentOffset.x;
                const index = Math.round(contentOffset / Dimensions.get('window').width);
                setCurrentIndex(index);
            }}

        />
        <Button title="Previous" onPress={handlePrevPress} />

        {currentIndex==slides.length-1?
            <Button title="Done" onPress={handleFinishPress} />:
            <Button title="Next" onPress={handleNextPress} />
        }
        </View>
    )
}

const slides=[
    {
        id:'1',
        title:'first onboarding page',
        description:'this is the first page ',
    },
    {
        id:'2',
        title:'second page',
        description:'this is the second page',
    },
    {
        id:'3',
        title:'end page',
        description:'this is the end page',
    },
]