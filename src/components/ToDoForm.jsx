import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, Button, View, Alert } from 'react-native';

function ToDoForm({ addTask }) {
  const [input, setInput] = useState('');
  const [fetchedTasks, setFetchedTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('./src/data/tasks.json');
        const data = await response.json();
        setFetchedTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        Alert.alert('Error', 'Failed to fetch tasks. Please try again later.');
      }
    };

    fetchTasks();
  }, []);

  const handleChangeText = (text) => {
    setInput(text);
  }

  const handlePress = () => {
    if (input && input.trim() !== '') { // Check if input exists before trimming
      addTask(input.trim());
      setInput('');
    } else {
      Alert.alert('Error', 'Please enter a valid task.');
    }
  }

  const handleGenerateRandomTask = () => {
    if (fetchedTasks.length > 0) {
      const randomIndex = Math.floor(Math.random() * fetchedTasks.length);
      setInput(fetchedTasks[randomIndex]);
    } else {
      Alert.alert('Error', 'No tasks available to generate.');
    }
  }

  console.log('Rendered with input:', input);
  console.log('Rendered with fetchedTasks:', fetchedTasks);

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={handleChangeText}
        value={input}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add Task" onPress={handlePress} />
        <Button title="Generate Random Task" onPress={handleGenerateRandomTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'column',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ToDoForm;