import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";

import { styles } from "./style";
export default function Login() {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          textTransform: "uppercase",
          fontSize: "30px",
          fontWeight: "700",
          paddingHorizontal: "20px",
        }}
      >
        LOGIN{" "}
      </Text>{" "}
      <View style={{ width: "100%", marginTop: "80px" }}>
        '{" "}
        <View
          style={{
            borderWidth: "1px",
            borderColor: "#fff",
            backgroundColor: "rgba(0,0,0,0.1)",
            position: "relative",
            marginBottom: "15px",
          }}
        >
          <Icon
            name="user"
            size={35}
            color="black"
            style={{
              position: "absolute",
              left: "12px",
              padding: 0,
              transform: "translateY(15%)",
            }}
          />{" "}
          <TextInput
            placeholder="Name"
            style={{
              fontSize: "18px",
              fontWeight: "500",
              outline: "none",
              padding: "",
              paddingVertical: "14px",
              paddingLeft: "60px",
            }}
          />{" "}
        </View>{" "}
        <View
          style={{
            borderWidth: "1px",
            borderColor: "#fff",
            backgroundColor: "rgba(0,0,0,0.1)",
            position: "relative",
            marginBottom: "15px",
          }}
        >
          <Icon
            name="lock"
            size={35}
            color="black"
            style={{
              position: "absolute",
              left: "12px",
              padding: 0,
              transform: "translateY(15%)",
            }}
          />{" "}
          <TextInput
            placeholder="Password"
            style={{
              fontSize: "18px",
              fontWeight: "500",
              outline: "none",
              padding: "",
              paddingVertical: "14px",
              paddingLeft: "60px",
            }}
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
          />{" "}
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.touchableOpacityEye}
          >
            <Icon
              name="eye"
              size={35}
              color="black"
              style={{
                position: "absolute",
                right: "16px",
                padding: 0,
                transform: "translateY(15%)",
              }}
            />
          </TouchableOpacity>
        </View>{" "}
      </View>
      <Pressable width="100%" style={{ marginTop: "50px" }}>
        <Text
          style={{
            textAlign: "center",
            backgroundColor: "#000",
            color: "#fff",
            paddingVertical: "10px",
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          LOGIN{" "}
        </Text>{" "}
      </Pressable>{" "}
      <Pressable style={{ marginTop: "40px" }}>
        <Text
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          CREATE ACCOUNT{" "}
        </Text>{" "}
      </Pressable>{" "}
    </View>
  );
}
