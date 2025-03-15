import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const Header = ({ logo = false }) => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 4,
                backgroundColor: "white",
                marginTop: "8%",
            }}
        >
            {/* Logo & Name */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {logo ? (
                    <>
                        <Image
                            source={require("../../assets/logo1.png")} // Replace with actual logo path
                            style={{ width: 30, height: 30, borderRadius: 15, marginRight: 5 }}
                        />
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
                            GrowthYari
                        </Text>
                    </>
                ) : null}
            </View>

            {/* Icons */}
            <View style={{ flexDirection: "row", alignItems: "right", gap: 15, }}>
                <TouchableOpacity onPress={() => navigation.navigate('MessageScreen')}>
                    <FontAwesome name="comment-o" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("notification")}>
                    <FontAwesome name="bell" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="menu" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;
