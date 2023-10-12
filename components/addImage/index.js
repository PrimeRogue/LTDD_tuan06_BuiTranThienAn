import { View, Text, TextInput, Pressable, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";

import { styles } from "./style";
export default function AddImage() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
          marginBottom: "50px",
        }}
      >
        <Image
          source={require("../../assets/usb.png")}
          style={{ height: "70px", width: "70px" }}
        />{" "}
        <Text
          style={{ fontFamily: "Roboto", fontSize: "16px", fontWeight: "700" }}
        >
          {" "}
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
          bluetooth{" "}
        </Text>
      </View>
      <View style={{ marginBottom: "20px" }}>
        <Text
          style={{ fontFamily: "Roboto", fontSize: "18px", fontWeight: "700" }}
        >
          {" "}
          Cực kỳ hài lòng{" "}
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: "10px", marginBottom: "20px" }}>
        <Icon name="star" size={35} color="yellow" />
        <Icon name="star" size={35} color="yellow" />
        <Icon name="star" size={35} color="yellow" />
        <Icon name="star" size={35} color="black" />
        <Icon name="star" size={35} color="black" />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
          padding: "15px",
          paddingLeft: "40px",
          paddingRight: "40px",
          borderColor: "#1511EB",
          borderWidth: 1,
          width: "100%",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
      >
        <Input name>
          <Icon name="camera" size={35} color="black" />
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            Thêm hình ảnh
          </Text>
        </Input>
      </View>
      <View
        style={{
          borderColor: "#C4C4C4",
          borderWidth: 1,
          width: "100%",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <TextInput
          multiline={true}
          numberOfLines={10}
          placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
          style={{
            padding: "5px",
            paddingLeft: "10px",
            paddingRight: "10px",
            fontFamily: "Roboto",
            fontSize: "18px",
            fontWeight: "700",
            color: "#C4C4C4",
          }}
        />
      </View>
      <Pressable
        style={{
          width: "100%",
          borderWidth: 1,
          borderColor: "#1511EB",
          borderRadius: "5px",
          padding: "10px",
          backgroundColor: "#0D5DB6",
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: "20px",
            fontWeight: "700",
            color: "white",
            width: "100%",
            textAlign: "center",
          }}
        >
          Gửi
        </Text>
      </Pressable>
    </View>
  );
}
