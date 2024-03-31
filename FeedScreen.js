import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import PostCard from './PostCard';
import posts from './temp_posts.json';

export default class Feed extends Component {
  renderItem = ({ item }) => {
    return <PostCard post={item} />;
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <Text style={styles.appTitleText}>Espectagrama</Text>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={posts}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 35,
  },
  appTitle: {
    flex: 9.07,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: 28,
  },
  cardContainer: {
    flex: 9.93,
  },
});
