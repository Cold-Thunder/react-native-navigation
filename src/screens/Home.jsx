import React from "react";
import { StyleSheet, View, Text, Button, FlatList, Pressable, ScrollView, Dimensions, useWindowDimensions } from "react-native";

import { product } from "../data/constant"
import Card from "../components/Card";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.lists}>
                <FlatList
                    style={styles.list}
                    data={product}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => navigation.navigate("Details", { product: item })}>
                            <Card product={item} />
                        </Pressable>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    lists:{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    list: {
        width: "92%",
        // backgroundColor: "red"
    }
})