import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#f0f0f0',
    margin: 10,
    width: windowWidth * 0.5,
    borderRadius: 10,
  },
});