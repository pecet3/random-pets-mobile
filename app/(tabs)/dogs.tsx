import { Image, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { FontAwesome6 } from '@expo/vector-icons';
import { useState } from 'react';
import { MonoText } from '@/components/StyledText';

export default function DogsScreen() {
    const [dogImageUrl, setDogImageUrl] = useState(null)
    const fetchADog = async () => {
        try {
            const res = await fetch("https://dog.ceo/api/breeds/image/random", {
                method: "GET",
            })
            if (!res.ok) {
                throw new Error("error fetching data")
            }
            const data = await res.json()
            console.log(data)
            setDogImageUrl(data.message)

        } catch (err) {
            console.error("error fetching dog url")
        }


    }
    return (
        <View style={styles.container}>
            {dogImageUrl && <Image source={{ uri: dogImageUrl ? dogImageUrl : "" }} style={styles.image} />}
            <View style={styles.button}>
                <MonoText style={styles.title} onPress={fetchADog}>Weź pieska</MonoText>
                <FontAwesome6 name="dog" size={24} color="black" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '90%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 10,
        backgroundColor: '#e3e3e3',
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        borderRadius: 10,
    },
    span: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
