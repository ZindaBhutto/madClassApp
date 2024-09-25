import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the interface for the food item
interface FoodItem {
    id: string;
    name: string;
    image: string;
}

// Define your stack parameters
type RootStackParamList = {
    DetailScreen: { item: FoodItem }; // Add the route and its parameters
};

// Define the props for the DetailScreen component
interface DetailScreenProps {
    navigation: StackNavigationProp<RootStackParamList, 'DetailScreen'>; // Navigation prop
    route: RouteProp<RootStackParamList, 'DetailScreen'>; // Route prop
}

// The DetailScreen component
const DetailScreen: React.FC<DetailScreenProps> = ({ route, navigation }) => {
    const { item } = route.params; // Destructure item from route params

    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
        </View>
    );
};

// Styles for the DetailScreen component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
});

export default DetailScreen;