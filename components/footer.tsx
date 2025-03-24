import { View, StyleSheet, Image, Text } from "react-native";

const FooterComponent = () => {
  return (
    <View style={styles.foot_con}>
      <Text style={styles.footText}>
        © 2025 Trường Đại Học Bách Khoa, Đại Học Quốc Gia Thành Phố Hồ Chí Minh
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  foot_con: {
    borderTopColor: "lightgray",
    borderTopWidth: 2,
    fontSize: 20,
    justifyContent: "center",
    height: 60,
    paddingLeft: 20,
    paddingRight: 20,
    bottom: 0,
  },
  footText: {
    textAlign: "center",
    color: "gray",
  },
});
export default FooterComponent;
