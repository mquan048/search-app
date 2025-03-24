import { View, StyleSheet, Image, Text } from "react-native";

const NavBarComponent = () => {
  return (
    <View style={styles.nav_con}>
      <Image
        style={styles.logoBK}
        source={require("../assets/images/logoBK.png")}
      />
      <View style={styles.navText_con}>
        <View>
          <Text style={styles.navText}>
            Đại Học Quốc Gia Thành Phố Hồ Chí Minh
          </Text>
        </View>
        <View>
          <Text style={styles.navText}>Trường Đại Học Bách Khoa</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nav_con: {
    borderBottomColor: "#0e93e2",
    borderBottomWidth: 4,
    fontSize: 20,
    backgroundColor: "#0795df",
    height: 80,
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
  },
  logoBK: {
    height: 75,
    width: 75,
  },
  navText_con: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
  navText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
export default NavBarComponent;
