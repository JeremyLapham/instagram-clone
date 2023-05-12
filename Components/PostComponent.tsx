import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import { FC, useState } from 'react'
import StoriesComponents from './StoriesComponents'
import me from '../assets/JEREMY.png';
import bg from '../assets/staicBG.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faPaperPlane, faComment, faBookmark } from '@fortawesome/free-regular-svg-icons';

const PostComponent: FC = () => {
    const [posts, setPost] = useState([
        {
            ProfilePicture: bg,
            Username: 'BlackBG',
            Image: me,
            NumOfLikes: '6,000',
            Description: 'Awesome description',
            Comments: [
                {
                    UserWhoCommented: 'Scotterpop_11',
                    UsersComment: 'Awesome Comment'
                },
            ],
        },
        {
            ProfilePicture: me,
            Username: 'Jeremy',
            Image: bg,
            NumOfLikes: '61,000',
            Description: 'Awesome description',
            Comments: [
                {
                    UserWhoCommented: 'Walter white',
                    UsersComment: 'Awesome Comment'
                },
            ],
        },
    ])

    return (
        <ScrollView style={{ flex: 1 }}>
            <StoriesComponents />
            {
                posts.map((post, idx) => {
                    return (
                        <>
                            <View style={styles.ProfileNav}>
                                <View style={{ paddingTop: 10 }}>
                                    <Image source={post.ProfilePicture} style={styles.ImageStyle} />
                                </View>
                                <View style={styles.ProfileUsername}>
                                    <Text style={styles.UsernameText}>{post.Username}</Text>
                                </View>
                                <View style={styles.DotsView}>
                                    <Text style={styles.DotsText}>...</Text>
                                </View>
                            </View>
                            <View>
                                <Image source={post.Image} style={styles.ImagePost} />
                            </View>
                            <View style={styles.LikeView}>
                                <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingLeft: 14 }}>
                                    <FontAwesomeIcon icon={faHeart} style={{ color: 'white', marginRight: 15 }} size={25} />
                                    <FontAwesomeIcon icon={faComment} style={{ color: 'white', marginRight: 15, transform: [{ rotateY: '180deg' }] }} size={25} />
                                    <FontAwesomeIcon icon={faPaperPlane} style={{ color: 'white', marginRight: 15 }} size={25} />
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', paddingRight: 14, paddingTop: 10 }}>
                                    <FontAwesomeIcon icon={faBookmark} style={{ color: 'white', marginRight: 15 }} size={25} />
                                </View>
                            </View>
                        </>
                    )
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ImageStyle: {
        height: 40,
        width: 40,
        borderRadius: 50
    },
    ProfileNav: {
        flexDirection: 'row',
        paddingBottom: 10
    },
    UsernameText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    ProfileUsername: {
        justifyContent: 'center',
        paddingLeft: 20,
        paddingTop: 10,
    },
    DotsText: {
        color: 'white',
        fontSize: 30

    },
    DotsView: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 10
    },
    ImagePost: {
        width: '100%',
        height: 400
    },
    LikeView: {
        flexDirection: 'row'
    }
})

export default PostComponent