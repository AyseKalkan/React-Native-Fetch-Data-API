import React, { useState } from 'react';
import { RefreshControl, SectionList, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [sections, setSections] = useState([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2'],
    },
  ]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    const newSection = {
      title: 'Title ' + (sections.length + 1),
      data: ['Item ' + (sections.length + 1) + '-1', 'Item ' + (sections.length + 1) + '-2'],
    };
    setSections([...sections, newSection]);
    setRefreshing(false);
  };

  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={sections}
      renderItem={({ item }) => (
        <View style={styles.item2}>
          <Text style={styles.text_item}>{item}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#4ae1fa']} />
      }
      renderSectionHeader={({ section }) => (
        <View style={styles.item}>
          <Text style={styles.text_header}>{section.title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    flex: 2,
    borderWidth: 2,
    borderColor: '#000000',
    backgroundColor: '#4ae1fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item2: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#000000',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_header: {
    color: '#065275',
    fontSize: 50,
    fontStyle: 'italic',
    margin: 10,
  },
  text_item: {
    color: '#065275',
    fontSize: 25,
    margin: 10,
  },
});

export default App;
