import React from 'react';
import {
    TextInput,
    StyleSheet,
    Button,
    View  } from 'react-native';
function ToDoForm({ addTask }) {
    const [input, setInput] = React.useState('');

    const handleChangeText = (text) => {
        setInput(text);
    }

    addTask(input);

    const handlePress = () => {
        addTask(input);
    }
    return (
        <>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a new task..."
                    onChangeText = {handleChangeText}
                    value = {input}
                />
                <Button title="Add Task"  onPress={handlePress}/>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });

export default ToDoForm;