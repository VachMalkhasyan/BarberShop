import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchInput = ({ placeholder, onChangeText, value }) => {
  return (
    <View style={styles.container}>
      <Icon name="search-sharp" size={20} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 5,
    paddingHorizontal: 10,
    width: 200,
    borderWidth:2,
    marginLeft:7
  },
  icon: {
    margin: 10,
  },
  input: {
    flex: 1,
    height: 40,

  },
});

export default SearchInput;
