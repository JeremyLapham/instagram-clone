import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { FC } from 'react';
import me from '../assets/JEREMY.png';
import bg from '../assets/staicBG.jpg';

const StoriesComponents: FC = () => {
    return (
        <ScrollView horizontal style={styles.ScrollStyle}>
            <Image source={bg} style={styles.ImageStyle}/>
            <Image source={bg} style={styles.ImageStyle}/>
            <Image source={bg} style={styles.ImageStyle}/>
            <Image source={bg} style={styles.ImageStyle}/>
            <Image source={bg} style={styles.ImageStyle}/>
            <Image source={bg} style={styles.ImageStyle}/>
            <Image source={bg} style={styles.ImageStyle}/>
            <Image source={bg} style={styles.ImageStyle}/>
            <Image source={bg} style={styles.ImageStyle}/>
            <Image source={bg} style={styles.ImageStyle}/>
            <Image source={bg} style={styles.ImageStyle}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ImageStyle: {
        height: 70,
        width:70,
        borderRadius: 50,
        marginRight: 20
    },
    ScrollStyle: {
        paddingTop:10,
        paddingBottom:5
    }
})

export default StoriesComponents