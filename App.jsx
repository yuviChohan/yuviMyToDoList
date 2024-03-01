/**
 * My To Do List App
 *
 * @format
 */
 
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
 
 
function App() {
   const [tasks, setTasks] =
   useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
 
  return (
    <SafeAreaView>
      <ToDoList tasks ={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}
 
export default App;