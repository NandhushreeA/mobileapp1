import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { customerLogin } from '../../../src/services/productServices';

export default function SignUp() {
  const router = useRouter();
  const [customerId, setCustomerId] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [error, setError] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const validateInputs = () => {
    if (!customerId) {
      setError('Customer ID is required');
      return false;
    }
    if (!pin) {
      setError('PIN is required');
      return false;
    }
    if (pin.length !== 4) {
      setError('PIN must be 4 digits');
      return false;
    }
    if (pin !== confirmPin) {
      setError('PINs do not match');
      return false;
    }
    if (!acceptTerms) {
      setError('Please accept the terms and conditions');
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    if (!validateInputs()) return;

    try {
      // Here you would typically make an API call to register the user
      // For now, we'll simulate success and redirect to login
      setError('');
      router.replace('/AuthScreen');
    } catch (err) {
      setError('Failed to create account. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image 
            source={require('../../../assets/images/image.png')}
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>SIGN UP</Text>
        
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <MaterialIcons name="person-outline" size={20} color="#6c757d" />
            <TextInput
              style={styles.input}
              placeholder="CUSTOMER ID"
              value={customerId}
              onChangeText={setCustomerId}
              placeholderTextColor="#6c757d"
            />
          </View>

          <View style={styles.inputWrapper}>
            <MaterialIcons name="lock-outline" size={20} color="#6c757d" />
            <TextInput
              style={styles.input}
              placeholder="SET PIN"
              value={pin}
              onChangeText={setPin}
              secureTextEntry={!showPin}
              keyboardType="numeric"
              maxLength={4}
              placeholderTextColor="#6c757d"
            />
            <TouchableOpacity onPress={() => setShowPin(!showPin)}>
              <MaterialIcons
                name={showPin ? "visibility" : "visibility-off"}
                size={20}
                color="#6c757d"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.inputWrapper}>
            <MaterialIcons name="lock-outline" size={20} color="#6c757d" />
            <TextInput
              style={styles.input}
              placeholder="CONFIRM PIN"
              value={confirmPin}
              onChangeText={setConfirmPin}
              secureTextEntry={!showConfirmPin}
              keyboardType="numeric"
              maxLength={4}
              placeholderTextColor="#6c757d"
            />
            <TouchableOpacity onPress={() => setShowConfirmPin(!showConfirmPin)}>
              <MaterialIcons
                name={showConfirmPin ? "visibility" : "visibility-off"}
                size={20}
                color="#6c757d"
              />
            </TouchableOpacity>
          </View>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <View style={styles.termsContainer}>
            <TouchableOpacity 
              style={styles.checkbox}
              onPress={() => setAcceptTerms(!acceptTerms)}
            >
              <MaterialIcons
                name={acceptTerms ? "check-box" : "check-box-outline-blank"}
                size={24}
                color="#34C759"
              />
            </TouchableOpacity>
            <Text style={styles.termsText}>
              I accept Terms & conditions and Privacy policy.
            </Text>
          </View>

          <TouchableOpacity 
            style={styles.signUpButton}
            onPress={handleSignUp}
          >
            <Text style={styles.signUpButtonText}>SIGN UP</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.mobileSignUpContainer}
            onPress={() => router.push('/AuthScreen/mobilesignup')}
          >
            <MaterialIcons name="phone" size={20} color="#333" />
            <Text style={styles.mobileSignUpText}>Sign up through mobile number</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    overflow: 'hidden',
  },
  illustration: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  inputContainer: {
    width: '100%',
    gap: 15,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f3f5',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dfe2e5',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#333',
    fontSize: 16,
  },
  errorText: {
    color: '#dc3545',
    fontSize: 14,
    marginTop: 5,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  checkbox: {
    marginRight: 10,
  },
  termsText: {
    color: '#6c757d',
    flex: 1,
  },
  signUpButton: {
    backgroundColor: '#34C759',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mobileSignUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 10,
  },
  mobileSignUpText: {
    color: '#333',
    marginLeft: 10,
    fontSize: 16,
  },
});