import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from @expo/vector-icons

const HomeScreen = () => {
  const [favorites, setFavorites] = useState({}); // Store favorite state for each item

  const foodItems = [
    { id: '1', name: 'Pizza', image: 'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg' },
    { id: '2', name: 'Burger', image: 'https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg' },
    { id: '3', name: 'Pasta', image: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg' },
    { id: '4', name: 'Sushi', image: 'https://img.freepik.com/free-photo/maki-sushi-isolated-white_2829-7304.jpg' },
    { id: '5', name: 'Salad', image: 'https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-sesame-seeds_23-2148700369.jpg' },
    { id: '6', name: 'Tacos', image: 'https://img.freepik.com/free-photo/mexican-tacos-with-chicken-bell-peppers-black-beans-fresh-vegetables_2829-20049.jpg' },
    { id: '7', name: 'Steak', image: 'https://img.freepik.com/free-photo/well-done-piece-steak-wooden-board_140725-7478.jpg' },
  ];

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle favorite state for each item
    }));
  };

  const handleItemClick = (item) => {
    // Navigate to the detail screen, passing the item data
    navigation.navigate('DetailScreen', { item });
  };

  return (
    <View style={styles.wrapper}>
      {/* Fixed Top Bar with Back Arrow and Cart Icon */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.menuContainer}>
          <Text style={styles.mainLabel}>Menu</Text>
          <View style={styles.subLabels}>
            <Text style={styles.subLabel}>Meal</Text>
            <Text style={styles.subLabel}>Snack</Text>
            <Text style={styles.subLabel}>Sides</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.cartButton}>
          <Ionicons name="cart-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.grid}>
          {foodItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.itemContainer}>
              <View style={styles.imageWrapper}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.heartIcon}>
                  <Ionicons
                    name={favorites[item.id] ? 'heart' : 'heart-outline'}
                    size={24}
                    color={favorites[item.id] ? 'red' : 'black'}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Fixed Bottom Navigation Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble-outline" size={24} color="black" />
          <Text style={styles.navLabel}>Live Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="black" />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="black" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="fast-food-outline" size={24} color="black" />
          <Text style={styles.navLabel}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="heart-outline" size={24} color="black" />
          <Text style={styles.navLabel}>Favourites</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles for the HomeScreen component
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    zIndex: 10, // Ensure the bar stays above other content
    flexDirection: 'row', // Flex to align back button and cart button
    justifyContent: 'space-between', // Space between back arrow, title, and cart icon
    alignItems: 'center',
  },
  backButton: {
    padding: 5,
  },
  cartButton: {
    padding: 5,
  },
  menuContainer: {
    alignItems: 'center', // Center-align the content within the container
    flex: 1, // Make the container take up available space
  },
  mainLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subLabels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 5, // Add spacing between Menu and sub-labels
  },
  subLabel: {
    fontSize: 16,
    color: '#555',
  },
  container: {
    paddingTop: 110, // Add padding to avoid content being hidden under the top bar
    paddingBottom: 60, // Add padding to avoid content being hidden under the bottom bar
    paddingHorizontal: 20, // Added padding around the borders
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '45%',
    marginBottom: 20,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    padding: 5, // Added padding inside the container to give distance from the border
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 20,
  },
  text: {
    textAlign: 'center',
    padding: 5,
    fontSize: 16,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    zIndex: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
});

export default HomeScreen;
