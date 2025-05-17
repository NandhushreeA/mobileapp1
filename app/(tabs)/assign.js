import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TaskCard = ({ task, onStatusChange }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{task.taskName}</Text>
    <Text style={styles.label}>Assigned To: <Text style={styles.value}>{task.assignedTo}</Text></Text>
    <View style={styles.statusContainer}>
      <Text style={styles.label}>Status: </Text>
      <TouchableOpacity 
        onPress={() => onStatusChange(task.id)}
        style={[styles.statusButton, { backgroundColor: getStatusColor(task.status) }]}
      >
        <Text style={styles.statusText}>{task.status}</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.label}>Employee Contact: <Text style={styles.value}>{task.employeeContact}</Text></Text>
    <Text style={styles.label}>Customer Name: <Text style={styles.value}>{task.customerName}</Text></Text>
    <Text style={styles.label}>Customer ID: <Text style={styles.value}>{task.customerId}</Text></Text>
  </View>
);

const getStatusColor = (status) => {
  switch (status) {
    case 'Completed':
      return '#28a745';
    case 'In Progress':
      return '#ffc107';
    case 'Pending':
      return '#dc3545';
    default:
      return '#6c757d';
  }
};

const TaskAssignmentScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      // Replace this URL with your actual API endpoint
      const response = await fetch('YOUR_API_ENDPOINT/tasks');
      const data = await response.json();
      setTasks(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch tasks');
      setLoading(false);
      console.error('Error fetching tasks:', err);
    }
  };

  const handleStatusChange = async (taskId) => {
    try {
      // Replace with your API endpoint
      const response = await fetch(`YOUR_API_ENDPOINT/tasks/${taskId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: tasks.find(task => task.id === taskId).status === 'In Progress' ? 'Completed' : 'In Progress'
        }),
      });

      if (response.ok) {
        setTasks(tasks.map(task => {
          if (task.id === taskId) {
            return {
              ...task,
              status: task.status === 'In Progress' ? 'Completed' : 'In Progress'
            };
          }
          return task;
        }));
      }
    } catch (err) {
      console.error('Error updating task status:', err);
      // You might want to show an error message to the user here
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color="#131a00" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Task Assignments</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard 
            task={item} 
            onStatusChange={handleStatusChange}
          />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
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
    textAlign: 'center',
    color: '#131a00',
    marginVertical: 20,
  },
  listContainer: {
    paddingBottom: 100, // space at the bottom for better scrolling feel
  },
  card: {
    backgroundColor: '#f9ffe6',
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
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
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statusButton: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#dc3545',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default TaskAssignmentScreen;
