// AboutScreen.jsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { SafeAreaView, StyleSheet, Text, Button } from 'react-native';

const AboutScreen = ({ navigation }) => {
  const appName = "YuviToDOList"; 
  const authorName = "Yuvraj Singh Chohan";
  const currentDate = new Date().toDateString();

  return (
    <MainLayout>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{appName}</Text>
      <Text style={styles.info}>Author: {authorName}</Text>
      <Text style={styles.info}>Date: {currentDate}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default AboutScreen;
