import { Link, useNavigation } from "@react-navigation/native";
import {
  View,
  Button,
  Text,
  Linking,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RootStackParamList from "@/types/routesType";
import { useEffect, useState } from "react";
import { fetchDocumentations } from "@/utils/firebase";
import DocAttribute from "@/types/docType";
import SearchBar from "@/components/searchBar";
import DocItem from "@/components/docItem";
import NavBarComponent from "@/components/navbar";
import FooterComponent from "@/components/footer";
import Pagination from "@/components/pgiation";
const HomeScreen = () => {
  // const navigation =
  //   useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // const gotoPage = (docId: string) => {
  //   navigation.navigate("Detail", { docId });
  // };
  const [currentPage, setcurrentPage] = useState(2);
  const [totaltPages, settotaltPages] = useState(3);
  const [onPageChange, setonPageChange] = useState(0);
  const [docs, setDocs] = useState<DocAttribute[]>([]);
  const [lastDoc, setLastDoc] = useState<string>();
  const [kString, setKString] = useState<string>("");

  const queryDoc = (keyword: string) => {
    fetchDocumentations(keyword).then((data) => {
      setDocs(data);
      setLastDoc(data[data.length - 1].lowerCaseName);
    });
    setKString(keyword);
  };

  const getNextDocuments = (keyword: string) => {
    fetchDocumentations(keyword, lastDoc).then((data) => {
      setDocs([...docs, ...data]);
      setLastDoc(data[data.length - 1].lowerCaseName);
    });
  };

  return (
    <>
      <NavBarComponent />
      <Text style={styles.header}>Welcome to search app</Text>
      <SearchBar searchDoc={queryDoc}></SearchBar>
      <FlatList
        data={docs}
        initialNumToRender={7}
        maxToRenderPerBatch={7}
        windowSize={5}
        renderItem={(doc) => (
          <DocItem
            name={doc.item.name}
            description={doc.item.description}
            url={doc.item.url}
          ></DocItem>
        )}
        onEndReached={() => getNextDocuments(kString)}
      />
      {/* 
      <Pagination
        currentPage={currentPage}
        totalPages={totaltPages}
        onPageChange={onPageChange}
      /> */}
      <FooterComponent />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 15,
    alignSelf: "center",
    fontSize: 20,
    color: "#0177b5",
    fontWeight: "bold",
  },
});

export default HomeScreen;
