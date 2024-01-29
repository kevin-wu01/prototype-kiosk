import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import ProfileButton from '../components/ProfileButton';

export default function Profile({ user }) {
    const styles = StyleSheet.create({
        body: {
            display: 'flex',
            flexDirection: 'row'
        },
        buttons: {
            marginLeft: 29
        }
    });

    return(
        <View style={{ backgroundColor: "#F2F0E9", height: "100%", padding: "2%" }}>
            <Text style={{ fontFamily: 'Manrope-Regular', fontSize: 60, width: "100%", paddingBottom: 16 }}>Hello, I am {user.name}, a {user.fact} lover.</Text>
            <View style={styles.body}>
                <Image source={require("../../assets/Residents/JustinKoerner.png")}/>
                <View style={styles.buttons}>
                    <ProfileButton text={"Get to know me"} />
                </View>
            </View>
        </View>
    );
}
