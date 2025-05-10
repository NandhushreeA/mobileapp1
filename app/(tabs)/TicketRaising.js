import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const TicketRaisingScreen = () => {
  const [issueType, setIssueType] = useState('');
  const [description, setDescription] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    if (!issueType || !description || !customerName || !customerId || !location) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    Alert.alert('Success', 'Ticket raised successfully!');
    setIssueType('');
    setDescription('');
    setCustomerName('');
    setCustomerId('');
    setLocation('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Raise a Communication Issue</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Select Issue Type</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={issueType}
            onValueChange={(itemValue) => setIssueType(itemValue)}
          >
            <Picker.Item label="-- Select Issue --" value="" />
            <Picker.Item label="SMS Not Delivered" value="SMS Not Delivered" />
            <Picker.Item label="Call Drops" value="Call Drops" />
            <Picker.Item label="Technican-issue" value="Technican-issue" />
            <Picker.Item label="Task_delay" value="Task_delay" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Describe the issue"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="Customer Name"
          value={customerName}
          onChangeText={setCustomerName}
        />
        <TextInput
          style={styles.input}
          placeholder="Customer ID"
          value={customerId}
          onChangeText={setCustomerId}
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Ticket</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#131a00',
    margin: 20,
  },
  form: {
    backgroundColor: '#f9ffe6',
    padding: 20,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 4,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TicketRaisingScreen;
