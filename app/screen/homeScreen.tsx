import { Link, useNavigation } from "@react-navigation/native";
import {
  View,
  Button,
  Text,
  Linking,
  FlatList,
  StyleSheet,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RootStackParamList from "@/types/routesType";
import { useEffect, useState } from "react";
import { fetchDocumentations } from "@/utils/firebase";
import DocAttribute from "@/types/docType";
import SearchBar from "@/components/searchBar";
import DocItem from "@/components/docItem";

const HomeScreen = () => {
  // const navigation =
  //   useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // const gotoPage = (docId: string) => {
  //   navigation.navigate("Detail", { docId });
  // };

  const [docs, setDocs] = useState<DocAttribute[]>([]);
  const [lastDoc, setLastDoc] = useState<string>();
  const [kString, setKString] = useState<string>('')

  const queryDoc = (keyword: string) => {
    fetchDocumentations(keyword).then((data) => {
      setDocs(data)
      setLastDoc(data[data.length - 1].lowerCaseName)
    })
    setKString(keyword)
  };

  const getNextDocuments = (keyword: string) => {
    fetchDocumentations(keyword, lastDoc).then((data) => {
      setDocs([...docs, ...data])
      setLastDoc(data[data.length - 1].lowerCaseName)
    })
  }

  return (
    <>
      <Text style={styles.header}>Welcome to search app</Text>
      <SearchBar searchDoc={queryDoc}></SearchBar>
      <FlatList
        data={docs}
        renderItem={(doc) => (
          <DocItem
            name={doc.item.name}
            description={doc.item.description}
            url={doc.item.url}
          ></DocItem>
        )}
        onEndReached={() => getNextDocuments(kString)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 40,
    alignSelf: "center",
    fontSize: 20,
    color: "#0177b5",
    fontWeight: "bold",
  },
});

export default HomeScreen;
