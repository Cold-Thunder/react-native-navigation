import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Card = ({ product }) => {
    return (
        <View style={styles.container} key={product.id}>
            <Image source={{ uri: product.imageUrl }} style={styles.img} />
            <View style={styles.details}>
                <Text style={styles.name}>{product.name}</Text>
                <View style={styles.otherText}>
                    <Text style={styles.rating}>Rating: {product.rating} ⭐</Text>
                    <Text style={styles.ratingCount}>Rating Count: {product.ratingCount}</Text>
                </View>
            </View>
        </View>
    )
}
export default Card;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        marginVertical: 10,
        paddingVertical: 30,
        height: "initial",
        width: "100%",
        backgroundColor: 'rgba(150,150,150,1)',
        borderRadius: 15,
        elevation: 5
    },
    img: {
        marginBottom: 10, 
        height:210,
        width: 160
    },
    details: {
        width: "100%",
        paddingLeft: 13,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    otherText: {
        width: "100%",
    },
    rating: {
        fontSize: 18,
        color: "white"
    },
    ratingCount: {
        fontSize: 18,
        color: "white"
    }
})