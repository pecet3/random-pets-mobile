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

export default function GuideScreen() {
    const careGuideItems = [
        {
            id: 1,
            text: "Zapewnij psu zrównoważoną i wysokiej jakości dietę. Wybierz karmę dostosowaną do wieku, rozmiaru i aktywności fizycznej. Unikaj karmy zawierającej sztuczne barwniki i konserwanty.",
        },
        {
            id: 2,
            text: "Pies potrzebuje regularnych spacerów i aktywności fizycznej. To utrzymuje go w dobrej kondycji fizycznej, pomaga spalić nadmiar energii i utrzymać zdrowie psychiczne.",
        },
        {
            id: 3,
            text: "Pamiętaj o regularnych wizytach kontrolnych u weterynarza, nawet jeśli pies zdaje się być zdrowy. Szczepienia, profilaktyczne badania i kontrola zdrowia są kluczowe dla długiego i zdrowego życia.",
        },
        {
            id: 4,
            text: "W zależności od rasy, pies może wymagać różnego rodzaju pielęgnacji sierści. Regularne szczotkowanie pomaga w eliminacji sierści martwej, redukuje ryzyko wypadania sierści i zapewnia zdrową skórę.",
        },
        {
            id: 5,
            text: "Często zapominamy o higienie jamy ustnej u psa. Regularne szczotkowanie zębów, stosowanie specjalnych przysmaków czy zabawek wspomagających zdrowie zębów, pomagają w zapobieganiu problemom z uzębieniem.",
        },
        {
            id: 6,
            text: "Pies potrzebuje bezpiecznego i wygodnego miejsca do spania. Zadbaj o odpowiednie legowisko i miejsce, gdzie może odpocząć.",
        },
        {
            id: 7,
            text: "Psy są istotami społecznymi, więc ważne jest, aby twój pies miał okazję do interakcji z innymi psami i ludźmi. To pomaga w budowaniu zdrowych relacji społecznych.",
        },
        {
            id: 8,
            text: "Psy są stworzeniami nawykowymi, dlatego utrzymanie stałej rutyny jest ważne. Konsekwencja w treningu i codziennych czynnościach pomaga psu zrozumieć oczekiwania.",
        },
        {
            id: 9,
            text: "Zwracaj uwagę na zachowanie psa. Zmiany w apetycie, nastroju czy aktywności mogą wskazywać na problemy zdrowotne.",
        },
        {
            id: 10,
            text: "Zabawa i nagrody są ważne dla utrzymania dobrego samopoczucia psa. Znajdź zabawki, które pobudzają jego umysł i dostarcz mu radości.",
        },
    ];


    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Text style={{ textAlign: 'center', fontSize: 24 }}>Porady Jak dbać o psa</Text>
                <FlatList
                    data={careGuideItems}
                    renderItem={({ item }) => <><Item content={item.text} id={item.id} /></>}
                    keyExtractor={(item) => item.id.toString()}
                />
            </SafeAreaView>
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
