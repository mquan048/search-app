import { Link, useNavigation } from "@react-navigation/native";
import {
  View,
  Button,
  Text,
  Linking,
  FlatList,
  StyleSheet,
  Image,
  Easing,
  Animated,
  ActivityIndicator,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RootStackParamList from "@/types/routesType";
import { useEffect, useState, useRef } from "react";
import { fetchDocumentations } from "@/utils/firebase";
import DocAttribute from "@/types/docType";
import SearchBar from "@/components/searchBar";
import DocItem from "@/components/docItem";
import NavBarComponent from "@/components/navbar";
import FooterComponent from "@/components/footer";
import Pagination from "@/components/pgiation";

const LoadingPage = () => {
  return (
    <>
      <NavBarComponent />
      <View style={styles.contain}>
        <View style={styles.logocon}>
          {/* <Animated.View
            style={[
              styles.circle,
              { transform: [{ rotate: rotateInterpolate }] },
            ]}
          >
            <View style={styles.innerCircle} />
          </Animated.View> */}
          <ActivityIndicator size={150} style={styles.circle} />
          <Image
            style={styles.logoBK}
            source={require("../../assets/images/logoBK.png")}
          />
        </View>
        <Text style={styles.textL}>LOADING...</Text>
      </View>
      <FooterComponent />
    </>
  );
};

const styles = StyleSheet.create({
  innerCircle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: "#3498db",
    position: "absolute",
    top: -10, // Đưa điểm tròn ra ngoài viền
  },
  header: {
    margin: 15,
    alignSelf: "center",
    fontSize: 20,
    color: "#0177b5",
    fontWeight: "bold",
  },
  contain: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textL: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  logocon: {
    marginBottom: 20,
    position: "relative",
  },
  logoBK: {
    width: 80,
    height: 80,
    margin: 20,
  },
  circle: {
    position: "absolute",
    top: -10,
    left: -15,
  },
});

export default LoadingPage;
