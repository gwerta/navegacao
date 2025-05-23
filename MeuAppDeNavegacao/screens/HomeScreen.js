import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.buttonContainer}>
      <Button color={"#440099"}
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      </View>
      <View style={styles.buttonContainer}>
        <Button color={"#440099"}
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
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
        backgroundColor: '#CCA9DD',
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