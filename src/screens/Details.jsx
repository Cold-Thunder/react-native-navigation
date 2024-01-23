import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

const About = ({ route }) => {
    const prod = route.params.product;
    return (
        <ScrollView>
            <View style={[styles.center, styles.container]}>
                <View style={[styles.center, styles.details]}>

                    <Image source={{ uri: prod.imageUrl }} style={styles.img} />
                    <View style={[styles.center, styles.detailsText]}>
                        <Text style={styles.name}>{prod.name}</Text>
                        <View style={styles.otherText}>
                            <View style={[styles.center, styles.ratings]}>
                                <Text style={styles.rating}>Rating: {prod.rating}⭐</Text>
                                <Text style={styles.ratingCount}>Rating Count: {prod.ratingCount}</Text>
                            </View>
                            <View style={styles.pricings}>
                                <Text style={styles.prcingHead}>Pricing:</Text>
                                <View style={styles.price}>
                                    <Text style={[styles.priceTxt, styles.oPrice]}>Original Price: ₹{prod.originalPrice}</Text>
                                    <Text style={[styles.priceTxt, styles.pPrice]}>Price: ₹{prod.discountPrice}</Text>
                                    <Text style={[styles.priceTxt, styles.oPerc]}>Discount: {prod.offerPercentage}%</Text>
                                </View>
                            </View>
                            <View style={styles.features}>
                                <Text style={styles.featureHead}>Features: </Text>
                                <View style={styles.featureDetails}>
                                    {
                                        prod.tags.map((item, index)=>(
                                            <Text style={styles.featureTxt} key={index}>➡️ {item}</Text>
                                        ))
                                    }
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}

export default About;

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {

    },
    details: {
        paddingTop: 40,
        marginVertical: 20,
        width: "95%",
        backgroundColor: 'rgba(150,150,150,1)',
        borderRadius: 10,
        elevation: 3
    },
    img: {
        marginBottom: 15,
        padding: 10,
        height: 400,
        width: 300
    },
    detailsText: {
        width: "95%",
        paddingVertical: 20,
    },
    heading: {
        fontSize: 22,
        color: "black"
    },
    name: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    otherText: {
        width: "95%",
    },
    ratings: {
        flexDirection: "row",
    },
    rating: {
        marginVertical: 5,
        fontSize: 18,
        color: "white",
    },
    ratingCount: {
        marginHorizontal: 15,
        fontSize: 18,
        color: "white"
    },
    pricings: {
        marginTop: 10,
    },
    prcingHead: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold"
    },
    priceTxt: {
        paddingLeft: 15,
        fontSize: 18,
        color: "white"
    },
    pPrice: {
        fontSize: 21,
        fontWeight: "bold",
        color: "rgba(255, 222,100, 1)"
    }, 
    features: {
        marginVertical: 15
    },
    featureHead: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    featureTxt:{
        paddingLeft: 15,
        marginVertical: 2,
        fontSize: 18,
        color: "white"
    }
})