import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
type ItemProps = { content?: string, id?: number };

const Item = ({ content }: ItemProps) => (
    <>
        <View style={styles.itemContainer}>
            <Text style={styles.itemDecorator}>__-*-__</Text>

            <Text style={styles.itemText}>{content}</Text>
        </View>

    </>
);

export default function SpotScreen() {

    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    itemContainer: {
        marginBottom: 20,
    },
    itemText: {
        fontSize: 18,
        lineHeight: 24,
        color: '#333',
        textAlign: 'left',
    },
    itemDecorator: {
        fontSize: 14,
        lineHeight: 24,
        color: '#333',
        textAlign: 'center',
    },
})
