
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  useEffect(() => {
    console.log("test")

  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Witaj w Naszej Aplikacji o Psach i Kotkach!</Text>

      <Text style={styles.introText}>
        Odkryj fascynujący świat czworonogów, przeglądając setki uroczych obrazków psów i kotków.
        Nasza aplikacja dostarcza nie tylko rozkosznych zdjęć, ale również ciekawostek, porad i informacji
        na temat różnych ras, ich pielęgnacji i zachowań.
      </Text>


      <Text style={styles.ctaText}>
        Nie czekaj! Rozpocznij przygodę z naszą aplikacją i poznaj najbardziej urocze
        i niezwykłe psy oraz koty.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  introText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  mainImage: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
  },
  ctaText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
