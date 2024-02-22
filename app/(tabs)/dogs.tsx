import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { FontAwesome6 } from '@expo/vector-icons';
export default function DogsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.span}>

                <Text style={styles.title}>Pieski</Text>
                <FontAwesome6 name="dog" size={24} color="black" />
            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <EditScreenInfo path="app/(tabs)/" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
