import React from 'react';
import { View, Text, ImageBackground, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/solarbackground1.jpeg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome to Atom Walk</Text>
          <Text style={styles.title}>Solar Management System</Text>
          <Text style={styles.subtitle}>
            Precision Scheduling, Transparent Team Allocation.
          </Text>

          {/* Wrapping buttons in a separate view for spacing */}
          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <Button
                title="Sign In"
                onPress={() => navigation.navigate('SignIn')}
                color="#d896ff"
              />
            </View>

            <View style={styles.buttonWrapper}>
              <Button
                title="Sign Up"
                onPress={() => navigation.navigate('SignUp')}
                color="#841584"
              />
            </View>
          </View>
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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: '200',
  },
  buttonContainer: {
    width: '60%',
    marginTop:200,
  },
  buttonWrapper: {
    marginVertical: 10, 
    marginBottom:10,// vertical spacing between buttons
  },
});

export default Home;