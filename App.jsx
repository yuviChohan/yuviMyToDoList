/**
 * My To Do List App
 *
 * @format
 */
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDoList from './src/components/ToDoList';
import ToDoForm from './src/components/ToDoForm';
import HomeScreen from './src/screens/HomeScreen'; // Importing HomeScreen
import AboutScreen from './src/screens/AboutScreen'; // Importing AboutScreen

const Stack = createNativeStackNavigator();

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="ToDoList" component={ToDoList} initialParams={{ tasks }} />
        <Stack.Screen name="ToDoForm" component={ToDoForm} initialParams={{ addTask: handleAddTask }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
