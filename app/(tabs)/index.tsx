import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const MAX_WIDTH = 1024;
const MAX_HEIGHT = 1366;

export default function LoginScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCreateWallet = () => {
    console.log('Create wallet');
    setIsLoggedIn(true);
  };

  const handleImportWallet = () => {
    console.log('Import wallet');
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return (
      <ThemedView style={styles.outerContainer}>
        <ThemedView style={styles.innerContainer}>
          <ThemedText style={styles.title}>Welcome to XOLANA</ThemedText>
          <ThemedText>You are logged in!</ThemedText>
        </ThemedView>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.outerContainer}>
      <ThemedView style={styles.innerContainer}>
        <ThemedText style={styles.title}>Welcome to XOLANA</ThemedText>
        <ThemedText style={styles.subtitle}>X1-powered Social Media</ThemedText>
        <TouchableOpacity style={styles.button} onPress={handleCreateWallet}>
          <ThemedText style={styles.buttonText}>Create New Wallet</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleImportWallet}>
          <ThemedText style={styles.buttonText}>Import Existing Wallet</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  innerContainer: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    height: '100%',
    maxHeight: MAX_HEIGHT,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1DA1F2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    maxWidth: 300,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});