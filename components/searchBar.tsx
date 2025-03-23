import React, { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import SearchBarProps from './../types/searchBarProps';

const SearchBarComponent: React.FC<SearchBarProps> = ( {searchDoc} ) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query: string) => setSearchQuery(query);

  useEffect(() => {
    searchDoc(searchQuery);
  }, [searchQuery])

  return (
      <View style={styles.container}>
        <Searchbar
          placeholder="Search..."
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
          iconColor="#0177b5"
          placeholderTextColor="#888"
          inputStyle={styles.inputStyle}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    margin: 'auto',
    marginBottom: 30,
  },
  searchContainer: {
    padding: 4,
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderRadius: 50,
    width: '90%',
    marginHorizontal: 'auto',
  },
  searchBar: {
    backgroundColor: "#fff",
    elevation: 2,
  },
  inputStyle: {
    color: "#333",
  },
});

export default SearchBarComponent;
