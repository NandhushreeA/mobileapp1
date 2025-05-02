import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BackImg = require('../../assets/images/Atom_walk_logo.jpg');

const taskData = [
  {
    id: '1',
    taskName: 'Install Solar Panel',
    assignedTo: 'Rahul Sharma',
    status: 'In Progress',
    employeeContact: '9876543210',
    customerName: 'Ajay Kumar',
    customerId: 'CUST123456',
  },
  {
    id: '2',
    taskName: 'System Inspection',
    assignedTo: 'Priya Mehta',
    status: 'Completed',
    employeeContact: '9123456789',
    customerName: 'Sunita Reddy',
    customerId: 'CUST987654',
  },
];

const TaskCard = ({ task }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{task.taskName}</Text>
    <Text style={styles.label}>Assigned To: <Text style={styles.value}>{task.assignedTo}</Text></Text>
    <Text style={styles.label}>Status: <Text style={styles.status}>{task.status}</Text></Text>
    <Text style={styles.label}>employeeContact: <Text style={styles.value}>{task.employeeContact}</Text></Text>
    <Text style={styles.label}>customerName: <Text style={styles.value}>{task.customerName}</Text></Text>
    <Text style={styles.label}>customerId: <Text style={styles.value}>{task.customerId}</Text></Text>
  </View>
);

const TaskAssignmentScreen = () => {
  return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Task Assignments</Text>
      <FlatList
        data={taskData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard task={item} />}
        contentContainerStyle={{ paddingBottom: 20}}
      />
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
    //marginVertical: 20,
    textAlign: 'center',
    color: '#131a00',
    margin:50,
  },
  card: {
    backgroundColor: '#f9ffe6',
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 4, // for Android
    shadowColor: '#000', // for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    margintop:8,
    color: '#111',
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  value: {
    fontWeight: '500',
    color: '#000',
  },
  status: {
    fontWeight: 'bold',
    color: '#007bff',
  },
});

export default TaskAssignmentScreen;
