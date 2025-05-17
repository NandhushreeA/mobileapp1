import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Logo from '../assets/images/Atom_walk_logo.jpg';

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={Logo} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>Welcome to Atomwalk Solar management system </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push('/AuthScreen')}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.signupButton]} 
          onPress={() => router.push('/AuthScreen/signup')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: 'Regular',
    marginBottom: 40,
    color: '#333',
    textAlign:'center'
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  signupButton: {
    backgroundColor: '#34C759',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
