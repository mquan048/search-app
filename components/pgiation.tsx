import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <View style={styles.container}>
      {/* Nút Previous */}
      <TouchableOpacity
        style={[styles.button, currentPage === 1 && styles.disabled]}
        onPress={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        <Text style={styles.text}>Pre</Text>
      </TouchableOpacity>

      {/* Nút Trang Trước (Nếu có) */}
      {currentPage > 1 && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPageChange(currentPage - 1)}
        >
          <Text style={styles.text}>{currentPage - 1}</Text>
        </TouchableOpacity>
      )}

      {/* Nút Trang Hiện Tại */}
      <TouchableOpacity style={[styles.button, styles.active]}>
        <Text style={styles.text}>{currentPage}</Text>
      </TouchableOpacity>

      {/* Nút Trang Sau (Nếu có) */}
      {currentPage < totalPages && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPageChange(currentPage + 1)}
        >
          <Text style={styles.text}>{currentPage + 1}</Text>
        </TouchableOpacity>
      )}

      {/* Nút Next */}
      <TouchableOpacity
        style={[styles.button, currentPage === totalPages && styles.disabled]}
        onPress={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    backgroundColor: "#3498db",
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  active: {
    backgroundColor: "#2ecc71",
  },
  disabled: {
    backgroundColor: "#bdc3c7",
  },
});

export default Pagination;
