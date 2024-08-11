import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import DiscoLights from './components/DiscoLights';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DiscoLights />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
