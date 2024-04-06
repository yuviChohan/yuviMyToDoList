import React from 'react';
import { View, StyleSheet } from 'react-native';

const MainLayout = ({ children, header, footer }) => {
  return (
    <View style={styles.container}>
      {header && <Header />}
      <View style={styles.content}>
        {children}
      </View>
      {footer && <Footer />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
  },
});

export default MainLayout;
