import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function ProfileButton({ text }) {
    const styles = StyleSheet.create({
        button: {
            borderWidth: 2,
            borderColor: "black",
            borderRadius: 40,
            height: '16%'
        }
    })

    return(
        <Pressable style={styles.button}>
            <Text style={{ fontFamily: 'Manrope-Regular', fontSize: 60 }}>
                {text}
            </Text>
        </Pressable>
    )
}