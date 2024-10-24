// app/(tabs)/index.tsx
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCreateWallet = () => {
    // TODO: Implement wallet creation logic
    console.log('Create wallet');
    setIsLoggedIn(true);
  };

  const handleImportWallet = () => {
    // TODO: Implement wallet import logic
    console.log('Import wallet');
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Welcome to XOLANA</ThemedText>
        <ThemedText>You are logged in!</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Welcome to XOLANA</ThemedText>
      <ThemedText style={styles.subtitle}>X1-powered Social Media</ThemedText>
      <TouchableOpacity style={styles.button} onPress={handleCreateWallet}>
        <ThemedText style={styles.buttonText}>Create New Wallet</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleImportWallet}>
        <ThemedText style={styles.buttonText}>Import Existing Wallet</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  button: {
    backgroundColor: '#1DA1F2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});