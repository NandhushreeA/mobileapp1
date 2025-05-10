import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/solarbackground1.jpeg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome to Atom walk</Text>
          <Text style={styles.title}>Solar Management System</Text>
          <Text style={styles.subtitle}>Precision Scheduling, Transparent Team Allocation.</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    //fontWeight: '',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    margin:2,
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '200',
  },
});

export default home;